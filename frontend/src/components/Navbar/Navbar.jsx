import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { FiSearch} from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
        <Link to='/'>
        <img src={assets.logo} alt='logo' className='logo'/>
        </Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() =>setMenu("home")} className={menu === 'home' ? "active" : ""}>home</Link>
            <a href='#explore-menu' onClick={() =>setMenu("menu")} className={menu === 'menu' ? "active" : ""}>menu</a>
            <a href='#app-download' onClick={() =>setMenu("mobile-app")} className={menu === 'mobile-app' ? "active" : ""}>mobile-app</a>
            <a href='#footer' onClick={() =>setMenu("contact us")} className={menu === 'contact us' ? "active" : ""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <FiSearch className="icon" />
            <div className='navbar-search-icon'>
                <Link to="/cart">
                <FaShoppingBasket className="icon" />
                </Link>
                <div className='dot'></div>
            </div>
            <button className='sign-in' onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar;