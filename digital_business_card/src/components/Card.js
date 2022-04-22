import React from "react";
import Head from "./Head";
import Body from "./Body";
import Foot from "./Foot";

export default function Card() { 
    return (
        <div className="card">
            <Head/>
            <Body/>
            <Foot/>
        </div>
    );
}