import { OPENAI_API } from "./api/api.js";

const form = document.querySelector('form');
const buttonText = document.querySelector('button span');
const generateImage = async (prompt) => {
    try {
        showloading(true);
        const response = await OPENAI_API.createImage({
            prompt: prompt,
            n: 1,
            size: '512x512'
        });

        const imageURL = response.data.data[0].url;

        showloading(false);

        console.log(imageURL)
    } catch (error) {
        console.warn(error)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.forEach(async entry => {
        if (!entry || Array.from(entry) < 3) return;
         await generateImage(entry);
         form.reset();
    })

})

const showloading = (state = false) => {
    const loadingOverlay = document.querySelector('#loading-overlay');

    const config = {
        loadingText: '...',
        default: 'Generate image'
    };

    if (!state) {
        buttonText.innerText = config.default;
        loadingOverlay.classList.add('hidden');
    }
    else {
        buttonText.innerText = config.loadingText;
        loadingOverlay.classList.remove('hidden');
    }
}