import React from "react";
import { useEffect, useState} from "react";
//components for styles
import styled from "styled-components";
// splide is for the carousel
import { Splide, SplideSlide } from '@splidejs/react-splide';
// css for splide
import "@splidejs/splide/dist/css/splide.min.css"; 

function Popular() {

    // state to save popular recipes
    const [popular,setPopular] = useState([]);

    // to run the function when the page loads we use useEffect
    useEffect(() => { 
            getPopular();
        },[]);
    
    // function to get popular recipes from api
    // asynchronous function is used here as request can take some time to accomplish 
    const getPopular = async (recipeCount=9) => { 
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=${recipeCount}`);
        const data = await api.json();
        setPopular(data.recipes);
    }

    // converting state data to jsx element
    const popularRecipes = popular.map(recipe => { 
        return (
            <SplideSlide>
                <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={ recipe.title} />
                </Card>
            </SplideSlide>
        ); 
    });

    //* Return from component 
    return <div>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
                {popularRecipes}
            </Splide>
        </Wrapper>
        </div>;
}

// * Using Styled component for styling instead of adding classes
const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

// card for each recipe
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    ${'' /* similar to sass nesting works in styled components */}
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Popular;
