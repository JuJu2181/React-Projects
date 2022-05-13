// Styled components
//components for styles
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const GridCard = styled.div`
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

const StyledForm = styled.form`
    margin: 0rem 20rem;

    div{
    position: relative;
    width: 100%;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: #fff;
    }
`;

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem; 
    display: flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1rem;
        line-height: 2.5rem;
        font-weight: 600;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
    p{
        margin-top:2rem;
    }
`;

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`;

export {Wrapper, Card, Gradient, Grid, GridCard, StyledForm, DetailWrapper, Button, Info, Logo, Nav};