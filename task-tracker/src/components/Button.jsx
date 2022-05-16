import React from "react";
import PropTypes from 'prop-types'

function Button(props) {

    const btnStyles = {
        backgroundColor: props.color
    };

    return <button className="btn" style={btnStyles} onClick={props.onClick}>
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
