import { resolve } from "styled-jsx/css";

const REPLICATE_MODEL_VERSION =
    "f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1";

const startGeneration = async (prompt) => {

    const response = await fetch(`${process.env.API_URL}/predictions`, {
        headers: {
            Authorization: `Token ${process.env.API_TOKEN}`,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            version: REPLICATE_MODEL_VERSION,
            input: { prompt },
        }),
    });

    return response.json();
};

const getGeneration = async (url) => {
    const result = await fetch(url, {
        headers: {
            Authorization: `Token ${process.env.API_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    return result.json();
};



export default async function handler(request, response) {

    const { prompt } = request.body;

    if (!prompt) {
        response.status(400).json("No Prompt provided")
    }

    // const predictions = await startGeneration(prompt)
    await new Promise(resolve => setTimeout(resolve ,1000))

    let generatedImage;

    // while (!generatedImage) {
    //     const result = await getGeneration(predictions.urls.get)

    //     if (result.status === "succeeded") {
    //         [generatedImage] = result.output
    //     } else if (result.status === "faild") {
    //         break;

    //     }
    //     else{
    //         await new Promise((resolve) => setTimeout(resolve,2000));
    //     }

    // }

    response.status(200).json(generatedImage ? generatedImage : "Failed to create the image,sorry :(")
}












