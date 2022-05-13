// Individual recipe page
import React from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper, Info, Button} from "../components/Style";


function Recipe() {
    const [details, setDetails] = React.useState({});
    const [activeTab, setActiveTab] = React.useState("instructions");

    let params = useParams();

    const fetchDetails = async (id) => {

        const checkRecipeDetail = localStorage.getItem(`recipe_detail_${id}`);

        if (checkRecipeDetail !== 'undefined' && checkRecipeDetail !== null) {
            setDetails(JSON.parse(checkRecipeDetail));
        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
            const recipeDetail = await data.json();
            localStorage.setItem(`recipe_detail_${id}`,JSON.stringify(recipeDetail));
            setDetails(recipeDetail);
        }
    }

    React.useEffect(() => {
        fetchDetails(params.id);
    }, [params.id]);



    const ingredients = Object.keys(details).length !== 0 && details.extendedIngredients.map((ingredient) => (
        <li key={ingredient.id}>{ ingredient.original}</li>
    ));
    

    return <DetailWrapper>
        <div>
            <h2>{ details.title}</h2>
            <img src={details.image} alt={ details.title} />
        </div>
        <Info>
            <Button onClick={() => { setActiveTab('instructions') }} className={ activeTab === 'instructions' ? 'active': ''}>Instructions</Button>
            <Button onClick={() => { setActiveTab('ingredients') }} className={activeTab === 'ingredients' ? 'active' : ''}>Ingredients</Button>
            { activeTab === 'instructions' && (
            <div>
                {/* Here api data itself has html tags so we need to render it like this else it will also render the tags */}
                <h3>Description</h3>    
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <h3>Steps to cook</h3>
                <p className="instructions" dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
            )}
            {activeTab === 'ingredients' && (
                <>
                <h3>Ingredients</h3>
                <ul>
                    { ingredients}
                </ul>
                </>
            )}
        </Info>
        </DetailWrapper>;
}

export default Recipe;
