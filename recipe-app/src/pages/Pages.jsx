import React from "react";
// importing pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
// importing from react router dom
import {Route, Routes} from 'react-router-dom';

// Pages will contain all the pages(includes navbar, home, search etc)
function Pages() {
    return (
        <Routes>
            {/* Here / means home and if this path matches it will render the home element */}
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
    );
}

export default Pages;
