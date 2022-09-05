import React, { Component } from 'react';
import logo from "../favicon2.png";

class Header extends Component {
  render() {

    if(this.props.data  ){
      var data = this.props.data;
      var name = data.name;
      var firstName = data.firstName;
      var occupation= data.occupation;
      var description= data.description;
      //var city= data.address.city;
      var networks= data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         
         
         <ul id="nav" className="nav">
            
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h2 className="responsive-headline">Hello, I'm {firstName} !</h2>
            <h3>I'm a <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
    //<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
  }
}

export default Header;
