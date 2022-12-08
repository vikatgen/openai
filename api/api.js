import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const OPENAI_API = new OpenAIApi(configuration);

export { OPENAI_API };