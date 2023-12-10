import React, { useState } from 'react'
import './Navbar.css'
import logo2 from '../Assets/logo2.png'

const Navbar = () => {
    const [ menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo2} alt='' />
        <h1>Leaf</h1>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("plants")}}>Plant {menu==="plants"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("trees")}}>Tree {menu==="trees"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("roots")}}>Root {menu==="roots"?<hr />:<></>}</li>
      </ul>
    </div>
  )
}

export default Navbar
