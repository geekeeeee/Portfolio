import React from 'react'
import {Link} from "react-router-dom"
import "./Bg.css"
const Bg = (props) => {
  return (
    <div className="bg">
      <img src={props.iurl} className="bgimg"/>
      <div className="content">
        <p>{props.head1}</p>
        <h1>{props.head2}</h1>
        <div className="links">
          <Link to="/projects" className="btnn">{props.wht}</Link>
        </div>
      </div>
    </div>

  )
}

export default Bg;
