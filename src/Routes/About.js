import Navbar from '../components/Navbar'
import React from 'react'
import "../components/Bg.css"
const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/1014/509/desktop-wallpaper-rock-n-roll-rock-and-roll.jpg" className="bgimg"/>
      <div className="content">
        <p>Hello!</p>
        <p>....</p>
      </div>
    </div>
    </div>
  )
}

export default About;
