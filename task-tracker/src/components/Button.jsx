import React from "react";
import PropTypes from 'prop-types'

function Button(props) {

    const btnStyles = {
        backgroundColor: props.color
    };

    const handleClick = () => { 
        console.log('clicked');
    }

    return <button className="btn" style={btnStyles} onClick={ handleClick}>
        {props.text}
    </button>;
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
