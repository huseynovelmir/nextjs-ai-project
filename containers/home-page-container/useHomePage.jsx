"use client"
import { useState, useContext, createContext, useMemo } from 'react'

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {

    const [prompt, setPrompt] = useState("")

    const  generateImage = async () => {
        //api call
        try{
         const response =   await fetch ("/api/generate" , {
                method: "POST",
                headers:{
                    "Content-type" : "application/json",
                },

                body:JSON.stringify({
                    prompt,
                }),
            });


            if(!response){
                throw new Error("Faild to create")
            }
            const generatedImage = await response.json()
        }catch (error){
            throw new Error("Somthing Went Wrong")
        }
      
    };

    const changePrompt = (newPrompt) => {
        setPrompt(newPrompt)
        window.scrollTo(0,0);
    }


    const data = useMemo(
        () => ({
            prompt,
            setPrompt,
            generateImage,
            changePrompt,


    }),
        [prompt]
     );

return (

    <HomePageContext.Provider value={data}>{children} </HomePageContext.Provider>
);
    
};

export const useHomePage = () => {
    const context = useContext(HomePageContext);
    return context;
};