import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
// for defining props types 
import PropTypes from 'prop-types'

function Header(props) {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{props.title}</h1>
            {location.pathname === '/' && (
            <Button color={ props.showAdd ? 'red':'green'} text={ props.showAdd ? 'Close':'Add'} onClick={props.onAdd}/>
            )}
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
