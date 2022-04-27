import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage} from "@fortawesome/free-solid-svg-icons";

export default function Meme() { 
    return (
        <main>
            <form className="meme-form">
                <input type="text" className="form-input" placeholder="Top text"/>
                <input type="text" className="form-input" 
                    placeholder="Bottom text"/>
                <button className="form-btn">
                    Generate a new Meme 
                    <FontAwesomeIcon icon={ faImage} className="image-icon"/>
                </button>
            </form>
        </main>
    );
}