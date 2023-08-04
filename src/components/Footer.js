import "./footer.css"
import React from 'react'
import {FaHome} from 'react-icons/fa';
import {BiSolidPhone,BiLogoInstagramAlt} from 'react-icons/bi';
import {AiOutlineLinkedin} from 'react-icons/ai';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
  return (
      <div className="footer"> 
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome className="logo"  size={25} style={{color:"#fff"}}/>
                    <p>NITC, Kozhikode</p>
                    <p>Kerala</p>
                </div>
                <div className="contactdetails">
                  <h4>
                    <BiSolidPhone className="float-right" size={25} style={{color:"#fff"}}/>
                    <p className="float-right">8943227504</p>
                    <p>Email: a22886915@gmail.com</p>
                  </h4>
                </div>
            </div>
            <div className="right justify-content-end">
                <BiLogoInstagramAlt size={25} style={{color:"#fff"}}/>
                <AiOutlineLinkedin size={25} style={{color:"#fff"}}/>
            </div>
        </div>
      </div>
  )
}

export default Footer;
