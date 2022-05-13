import React from "react";
// importing pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
// importing from react router dom
import {Route, Routes, useLocation} from 'react-router-dom';
// animate presence for fadein fadeout effect
import {AnimatePresence} from 'framer-motion';


// Pages will contain all the pages(includes navbar, home, search etc)
function Pages() {
    // location is needed for that fade in fade out effect of the animate presence
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes Location={location} key={ location.pathname}>
            {/* Here / means home and if this path matches it will render the home element */}
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;
