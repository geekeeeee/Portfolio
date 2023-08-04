import React,{useState} from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
const Navbar = () => {
    
    const [state,setState]=useState(false);
    const handleClick=()=>{
        setState(!state);
    }
    const setClick=()=>{
      setState(true);
  }
    console.log(window.innerWidth>1040);
  return (
    <div className="st">
      <div className='header'>
        <Link to="/">
            <img src='https://thumbs.dreamstime.com/b/letter-logo-design-simple-modern-logo-design-letter-very-simple-black-background-color-183193944.jpg' className="logo"/>
        </Link>
        <ul className={state?'navul':'navul active'}>
            <li><Link to="/" onClick={handleClick}>Home</Link></li>
            <li><Link to="/projects" onClick={handleClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
            <li><Link to="/about" onClick={handleClick}>About</Link></li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {state&&(<FaBars style={{color:"#ede3e3"}} size={25} />)}
            {!state&&(<FaTimes style={{color:"#ede3e3"}} size={25}/>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar
