import React, { memo } from 'react';
import "./Button.scss"
import PropTypes from "prop-types";


const Button = (props) => {

    const { children, handleClick, type, disabled } = props;


    return (
        <button type={type} className='button' onClick={handleClick} disabled={disabled} >{children}</button>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.string,
    handleClick: PropTypes.func,
    type: PropTypes.string,
}

Button.defaultProps = {
    disabled: false,
    children: "Button",
    type: 'button',
    handleClick: () => { },

}



export default memo(Button)

