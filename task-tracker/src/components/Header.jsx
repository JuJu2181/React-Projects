import React from "react";
// for defining props types 
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

// default props
Header.defaultProps = {
    title: 'React Task Tracker',
}

// Specifying the types of props 
// when these types are not satisfied by props warning is obtained in console but element is still rendered
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// writing css inside JS 
/**
 * const headingStyles = {
 *  color: 'red',
 *  backgroyndColor: 'black',
 * }
 * And in component specify it as <Component style={headingStyles}/>
 */

export default Header;
