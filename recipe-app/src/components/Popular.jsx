import React from "react";
import { useEffect, useState} from "react";
//components for styles
import styled from "styled-components";
// splide is for the carousel
import { Splide, SplideSlide } from '@splidejs/react-splide';
// css for splide
import "@splidejs/splide/dist/css/splide.min.css"; 
import storedData from "../data";

function Popular() {

    // state to save popular recipes
    const [popular,setPopular] = useState([]);

    // to run the function when the page loads we use useEffect
    useEffect(() => { 
            getPopular();
        },[]);
    
    // function to get popular recipes from api
    // asynchronous function is used here as request can take some time to accomplish 
    const getPopular = async (recipeCount = 10,fetchIfNotFound='localStorage') => {

        /**
         * Instead of fetching the data from every single time what I did was 
         * to use some dummy data in a data.js file and then checking for   error and in case of error fetching data from data.js but even more efficient way of doing this is by using the local storage as a cache
         */
        if (fetchIfNotFound === 'localStorage') {
            //* Firstly check if the item exists in localStorage if it doesn't exist we set an item instead 
            const checkPopular = localStorage.getItem("popular");

            // console.log(checkPopular);

            if (checkPopular !== 'undefined') {
                // If there is already an item called popular stored in localStorage then we will get the recipes from local Storage instead of sending fetch request
                setPopular(JSON.parse(checkPopular));
            } else {
                // fetch data from api only when there is no item called popular in the localStorage
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=${recipeCount}`);
                const data = await api.json();
                console.log(data)
                localStorage.setItem("popular",JSON.stringify(data.recipes));
                setPopular(data.recipes);
            }
        }
        
        else if (fetchIfNotFound === 'file') {
            //** This is my own method for error handling and fetching data from a local file */
            let data;
            try {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=${recipeCount}`);
                if (api.status !== 200) {
                    throw new Error("Response code is not 200");
                }
                data = await api.json();
                // console.log("Data from API");
            } catch (e) {
                console.log(`Error Found: ${e}\n so now using the default stored Data`);
                data = storedData;
            }
            console.log(data);
            setPopular(data.recipes);
        }
    }

    // converting state data to jsx element
    const popularRecipes = popular.map(recipe => { 
        return (
            <SplideSlide key={ recipe.id}>
                <Card>
                <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
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

// gradient style component 
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;


export default Popular;
