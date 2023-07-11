import React from 'react'
import PropTypes from "prop-types";
function Header({title, bgcolor, color}) {
    const headerStyles = {
        backgroundColor:bgcolor,
        color:color
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2 className='title'>{title}</h2>
        </div>
    </header>
  )
}

Header.defaultProps ={
    title: "Rating App",
    bgcolor:'rgba(0,0,0,0.4)',
    color:'#ff6a95'
}
Header.propTypes={
    title: PropTypes.string,
    bgcolor:PropTypes.string,
    color:PropTypes.string
}
export default Header