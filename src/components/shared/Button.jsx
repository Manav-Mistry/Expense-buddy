import React from 'react'
import PropTypes from "prop-types" 

function Button({children, btnType, btnColorStyle, btnSize}) {
    const handleClick = () => {
        console.log(btnType, btnColorStyle, btnSize);
    }
  return (
    <button onClick={handleClick} type={btnType} className = {`${btnColorStyle} ${btnSize}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    btnType: 'button',
    btnColorStyle: 'primary',
    btnSize: 'medium'
}

Button.propTypes = {
    children: PropTypes.node,
    btnType: PropTypes.string,
    btnColorStyle: PropTypes.string,
    btnSize: PropTypes.string,

}

export default Button