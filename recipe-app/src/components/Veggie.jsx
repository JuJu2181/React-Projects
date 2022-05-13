import React from "react";
import { Wrapper, Card, Gradient } from "./Style";
// splide is for the carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
// css for splide
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
    // state to save veggie recipes
    const [veggie, setVeggie] = React.useState([]);

    // to run the function when the page loads we use useEffect
    React.useEffect(() => {
        getVeggie();
    }, []);

    // function to get veggie recipes from api
    // asynchronous function is used here as request can take some time to accomplish
    const getVeggie = async (recipeCount = 10) => {
        //* Firstly check if the item exists in localStorage if it doesn't exist we set an item instead
      const checkVeggie = localStorage.getItem("veggie");
      console.log(checkVeggie);
      if (checkVeggie !== "undefined" && checkVeggie !== null) {
          
            // If there is already an item called veggie stored in localStorage then we will get the recipes from local Storage instead of sending fetch request
            setVeggie(JSON.parse(checkVeggie));
        } else {
            // fetch data from api only when there is no item called veggie in the localStorage
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=${recipeCount}&tags=vegetarian`
            );
            const data = await api.json();
            console.log(data);
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

    // converting state data to jsx element
    const veggieRecipes = veggie.map((recipe) => {
        return (
            <SplideSlide key={recipe.id}>
                <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                </Card>
            </SplideSlide>
        );
    });

    return (
        <div>
            <Wrapper>
                <h3>Our Vegeterian Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {veggieRecipes}
                </Splide>
            </Wrapper>
        </div>
    );
}

export default Veggie;
