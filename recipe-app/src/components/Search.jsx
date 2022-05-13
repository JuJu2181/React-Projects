import React from "react";
import { FaSearch } from "react-icons/fa";
// useNavigate can be used to navigate to another page without using a tags
import { useNavigate} from "react-router-dom";
import { StyledForm} from "./Style";


function Search() {

    const [input, setInput] = React.useState("");
    const navigate = useNavigate();

    const handleInput = (e) => { 
        setInput(e.target.value)
    }

    // to handle submitting the form
    const handleSubmit = (e) => { 
        e.preventDefault();
        navigate(`/searched/${input}`);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <div>
                <FaSearch/>
                <input type="text" name="" value={input} onChange={handleInput}/>
            </div>
        </StyledForm>
    );
}

export default Search;
