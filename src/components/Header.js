import React from 'react';
import logo from './assets/logo.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
function Header(props) {
    return (
      <header>
          <div className="logo">
              <img className="logoIcon" src={logo} alt="logo"></img>
              <h2>{props.name}</h2>
          </div>
          <div className="socialMedia">
              <h3>
                  {props.follow}
              </h3>
              <img src={facebook} className="icon" alt="Facebook Icon"></img>
              <img src={twitter} className="icon space" alt="Twitter Icon"></img>
              <img src={instagram} className="icon" alt="Instagram Icon"></img>
          </div>
      </header>
    );
  }
  
export default Header;
  