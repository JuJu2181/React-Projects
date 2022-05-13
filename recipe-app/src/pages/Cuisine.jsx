import React from "react";
// for animation
import { motion } from "framer-motion";
// useParams allows to pull parameters from the link url
import { Link, useParams } from "react-router-dom";
import {Grid,GridCard} from "../components/Style";


function Cuisine() {

    const [cuisine, setCuisine] = React.useState([]);
    let params = useParams();

    const getCuisine = async (name) => { 
        const checkCuisine = localStorage.getItem(`cuisine_${name}`);


        if (checkCuisine !== 'undefined' && checkCuisine !== null) {
            setCuisine(JSON.parse(checkCuisine));
        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`);
            const recipes = await data.json();
            localStorage.setItem(`cuisine_${name}`,JSON.stringify(recipes.results));
            setCuisine(recipes.results);
        }
    }

    React.useEffect(() => { 
        getCuisine(params.type);
    }, [params.type]);
    
    const cuisines = cuisine.map((item) => { 
        return (
            <GridCard key={item.id}>
                <Link to={ `/recipe/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Link>
            </GridCard>
        );
    });

    return <Grid>
        {cuisines}
    </Grid>;
}



export default Cuisine;
