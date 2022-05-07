import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage} from "@fortawesome/free-solid-svg-icons";
import memeData from "../memesData";

export default function Meme() { 

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState([]);
    
    /** Alternatively using async await instead of fetch
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    // const [memeUrl, setUrl] = React.useState(memeData.data.memes[0].url);
    // * Using fetch api ad then
    React.useEffect(() => { 
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    },[]);
    
    //* using async await 
    // React.useEffect(() => { 
    //     async function get_memes() { 
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json();
    //         setAllMemeImages(data.data.memes)
    //     }
    //     get_memes();
    //     },[]);

    const getMemeImage = () => { 
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url 
        // setUrl(url);
        setMeme(
            prevMeme => ({
                ...prevMeme,
                randomImage: url
            })
        );
    }

    const handleChange = event => { 
        const { name, value } = event.target;
        setMeme(
            prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        );
    }


    return (
        <main>
            <div className="meme-form">
                <input type="text" className="form-input" placeholder="Top text" name="topText" value={meme.topText} onChange={ handleChange}/>
                <input type="text" className="form-input"
                    placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={ handleChange}/>
                <button className="form-btn" onClick={getMemeImage}>
                    Generate a new Meme 
                    <FontAwesomeIcon icon={ faImage} className="image-icon"/>
                </button>
            </div>
            <div className="meme">
                <img src={ meme.randomImage} alt="meme image" className="meme-img" />
                <h2 className="meme-text top">{ meme.topText}</h2>
                <h2 className="meme-text bottom">{ meme.bottomText}</h2>
            </div>
        </main>
    );
}