import React, { Component } from 'react';
import emailjs from 'emailjs-com';


//import './ContactUs.css';

class Contact extends Component {
    state = {
       buttonMessage : 'Submit'
    }
    render() {
      
      if(this.props.data){
        var name = this.props.data.name;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone= this.props.data.phone;
        var email = this.props.data.email;
        var message = this.props.data.contactmessage;
      }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ycdy6bm', 'template_qa50qkc', e.target, 'user_cXR96OzUQrmrr5vCtKXWD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  /*return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>*/
    return (
        <section id="contact">
  
           <div className="row section-head">
  
              <div className="two columns header-col">
  
                 <h1><span>Get In Touch.</span></h1>
  
              </div>
  
              <div className="ten columns">
  
                    <p className="lead">{message}</p>
  
              </div>
  
           </div>
  
           <div className="row">
              <div className="eight columns">
              <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label>Name</label>
              <input type="text" name="from_name" />
              <label>Email</label>
              <input type="email" name="from_mail" />
              <label>Message</label>
              <textarea name="message" />
              <button className="submit" type="submit" value="Send" onClick={(e) => this.setState({buttonMessage : "Thanks for your mail! \n  I will get back to you shortly."})}> {this.state.buttonMessage}</button>
              </form>  
             </div>
  
  
              <aside className="four columns footer-widgets">
                 <div className="widget widget_contact">
  
                         <h4>Address and Phone</h4>
                         <p className="address">
                             {name}<br />
                             {street} <br />
                             {city}, {state} {zip}<br />
                             <span>{phone}</span>
                         </p>
                     </div>
  
                 
              </aside>
        </div>
     </section>
      );
}}

export default Contact;