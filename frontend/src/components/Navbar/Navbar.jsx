import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { FiSearch} from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
    const [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='logo' className='logo'/>
        <ul className="navbar-menu">
            <li onClick={() =>setMenu("home")} className={menu === 'home' ? "active" : ""}>home</li>
            <li onClick={() =>setMenu("menu")} className={menu === 'menu' ? "active" : ""}>menu</li>
            <li onClick={() =>setMenu("mobile-app")} className={menu === 'mobile-app' ? "active" : ""}>mobile-app</li>
            <li onClick={() =>setMenu("contact us")} className={menu === 'contact us' ? "active" : ""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <FiSearch className="icon" />
            <div className='navbar-search-icon'>
                <FaShoppingBasket className="icon" />
                <div className='dot'></div>
            </div>
            <button className='sign-in'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar;