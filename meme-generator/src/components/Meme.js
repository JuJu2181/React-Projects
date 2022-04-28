import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage} from "@fortawesome/free-solid-svg-icons";
import memeData from "../memesData";

export default function Meme() { 

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: memeData.data.memes[0].url
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    // const [memeUrl, setUrl] = React.useState(memeData.data.memes[0].url);

    const getMemeImage = () => { 
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url 
        // setUrl(url);
        setMeme(
            prevMeme => ({
                ...prevMeme,
                randomImage: url
            })
        );
    }

    return (
        <main>
            <div className="meme-form">
                <input type="text" className="form-input" placeholder="Top text"/>
                <input type="text" className="form-input" 
                    placeholder="Bottom text"/>
                <button className="form-btn" onClick={getMemeImage}>
                    Generate a new Meme 
                    <FontAwesomeIcon icon={ faImage} className="image-icon"/>
                </button>
            </div>
            <img src={ meme.randomImage} alt="meme image" className="meme-img" />
        </main>
    );
}