import React from "react";
import {Link, useParams} from "react-router-dom";
import { Grid, GridCard} from "../components/Style";


function Searched() {

    const [searchedRecipes, setSearchedRecipes] = React.useState([]);
    let params = useParams();
    
    const getSearched = async (name) => { 
        const checkSearched = localStorage.getItem(`Searched_${name}`);


        if (checkSearched !== 'undefined' && checkSearched !== null) {
            setSearchedRecipes(JSON.parse(checkSearched));
        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`);
            const recipes = await data.json();
            localStorage.setItem(`Searched_${name}`,JSON.stringify(recipes.results));
            setSearchedRecipes(recipes.results);
        }
    }

    React.useEffect(() => { 
        getSearched(params.search);
    }, [params.search]);
    
    const searchResult = searchedRecipes.map(item => { 
        return (
            <GridCard key={item.id}>
                <Link to={ `/recipe/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Link>
            </GridCard>
        );
    });

    return <>
    <h3>Search Results for {params.search}</h3>
    <Grid>
        { searchResult}
    </Grid>;
    </>
}

export default Searched;
