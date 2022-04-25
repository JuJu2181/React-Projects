import React from "react"
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {

  const cards = data.map(
    item => { 
      return (
        <Card
          key={item.id}
          // img={item.coverImg}
          // rating={item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title={item.title}
          // price={item.price}
          // openSpots={ item.openSpots}
          // * Alternative directly pass the object 
          item={item}
          // * Another way is to spread objects 
          // ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
          //* {...item}
          // this is same as the first method used as it destructure/spread the objects
        />
      );
    }
  );

  return (
      <div>      
      <Navbar />
      <Hero />
      <section className="card-wrapper">
      { cards}
      </section>
      </div>
    )
  }
  /* <Card 
    img="img1.jpg"
    rating="5.0"
    reviewCount={6}
    country="USA"
    title="Bounty Hunting Lessons with great Mandalorian"
    price={ 999 }
  /> */