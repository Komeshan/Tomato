import React from 'react'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <AnchorLink href='#food-display'><button>View menu</button></AnchorLink>
        </div>
    </div>
  )
}

export default Header