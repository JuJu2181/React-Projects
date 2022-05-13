import React from "react";
import styled from "styled-components";
// for animation
import { motion } from "framer-motion";
// useParams allows to pull parameters from the link url
import { Link, useParams } from "react-router-dom";

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
            <Card key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{ item.title}</h4>
            </Card>
        );
    });

    return <Grid>
        {cuisines}
    </Grid>;
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;
