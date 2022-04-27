import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage} from "@fortawesome/free-solid-svg-icons";
import memeData from "../memesData";

export default function Meme() { 

    const getMemeImage = () => { 
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url 
        console.log(url)
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
        </main>
    );
}