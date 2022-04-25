import React from "react";
import Navbar from "./components/Navbar";
import Tile from "./components/Tile";
import data from './data'


export default function App(){ 
  const tiles = data.map(
    item => { 
      return (
        <div>
        <Tile
          item={item}
          />
          <hr />
        </div>
      );
    }
  );
  
  return (
    <div>
    <Navbar />
    <section className="tile-wrapper">
        {tiles}
      </section>
    </div>
  );
}
