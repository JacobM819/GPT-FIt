const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion (prompt) {
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: prompt,
        max_tokens:100
    });
    return(completion.data.choices[0].text);
}

// let output = runCompletion();
console.log(runCompletion("Hello how are you"));