import React from 'react'
import Card from './Card'
import './Skills.css'
import {BiLogoMongodb,BiLogoNodejs,BiLogoCss3,BiLogoJavascript,BiLogoReact} from 'react-icons/bi';
const Skills = () => {
  return (
    <div class="skill">
    <h1>Skills</h1>
    <div className="side row">
      <Card className="col-sm-12 col-md-6 col-lg-6" name="HTML"/>
      <div className='card col-sm-12 col-md-6 col-lg-6'>
        <div>
            <BiLogoCss3 size={40} style={{margin:10}}/>
        </div>
        <div className="name">CSS</div>
      </div>
      
      <div className='card col-sm-12 col-md-6 col-lg-6'>
        <div>
            <BiLogoJavascript size={40} style={{margin:10}}/>
        </div>
        <div className="name">JS</div>
      </div>
      <div className='card col-sm-12 col-md-6 col-lg-6'>
        <div>
            <BiLogoReact size={40} style={{margin:10}}/>
        </div>
        <div className="name">React</div>
      </div>
      <div className='card col-sm-12 col-md-6 col-lg-6'>
        <div>
            <BiLogoNodejs size={40} style={{margin:10}}/>
        </div>
        <div className="name">Nodejs</div>
      </div>
      <div className='card col-sm-12 col-md-6 col-lg-6'>
        <div>
            <BiLogoMongodb size={40} style={{margin:10}}/>
        </div>
        <div className="name">Mongodb</div>
      </div>
      
    </div></div>
  )
}

export default Skills
