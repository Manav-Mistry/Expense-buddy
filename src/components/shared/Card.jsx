import PropTypes from "prop-types" 
import React from 'react'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'card-reverse'}`}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Card