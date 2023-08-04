import React from 'react'
import "./Card.css"
import {BiLogoHtml5} from 'react-icons/bi';
const Card = (props) => {
  return (
    <div className='card'>
      <div className="img">
        <BiLogoHtml5 size={40} style={{margin:10}}/>
      </div>
      <div className="name">{props.name}</div>
    </div>
  )
}

export default Card
