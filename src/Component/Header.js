import '../css/style.min.css';
import React, { useState } from 'react';
import {Link, useLocation } from "react-router-dom";
import useCollapse from '../Hooks/useCollapse'
import logo from '../img/logo.png';
import cancel from '../img/icon/cancel.png';
import menu from '../img/icon/menu.png';

function Header() {

  const {collapse, toggleCollapse} = useCollapse(true);
  const location = useLocation();
  const breadcrumb_arr = location.pathname.length>1 ? location.pathname.split("/") : [];

  const  breadcrumb = breadcrumb_arr.map((ele,index)=>{

    if(breadcrumb_arr.length - 1 === index){
      return(<React.Fragment key={index}><span>{ele.replace('-',' ')}</span></React.Fragment>)
    }
    return(<React.Fragment key={index}><span>{ele.replace('-',' ')}</span><b>&#x3e;</b></React.Fragment>)
  }

  );


  return (
    <div className="header section col">

      <div className="header_top section col">
        <div className="content">
          <img className="menu_btn" src={collapse? menu : cancel} onClick={() => toggleCollapse()} alt="Menu button"/>
          <Link to="/" onClick={() => toggleCollapse()}><img className="logo" src={logo} alt="Logo"/></Link>
        </div>

        <div className="dropdown content col" style={{'display':collapse? 'none' : 'flex'}}>
          <Link to="/online-casinos" className="menu_item row" onClick={() => toggleCollapse()}><b>></b>Online Casinos</Link>
          <Link to="/free-spins" className="menu_item row" onClick={() => toggleCollapse()}><b>></b>Free Spins</Link>
          <Link to="/casino-bonus" className="menu_item row" onClick={() => toggleCollapse()}><b>></b>Casino Bonus</Link>
        </div>
      </div>

      <div className="breadcrumb shadow section col">
        <div className="content row">
          <span>Home</span>
          {breadcrumb}
        </div>
      </div>

    </div>
  );
}

export default Header;
