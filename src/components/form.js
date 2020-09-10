import React from 'react';
import emailjs from 'emailjs-com';



const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_xHJcuAgG', e.target, 'user_kf5tCn32h6RcPBUNDdmal')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return(
        <form className="contact_form" onSubmit={sendEmail}>
            <div className="form_group">
                <label htmlFor="name"></label>
                <input type="text" className="form_control" name="from_name" placeHolder="Name"></input>
            </div>
            <div className="form_group">
                <label htmlFor="email" ></label>
                <input type="text" className="form_control" name="reply_to" placeHolder="Email"></input>
            </div>
            <div className="form_group">
                <label htmlFor="message" ></label>
                <textarea type="text" className="form_control" rows="2" name="message_html" placeHolder="Message"></textarea>
            </div>
            <button type="submit" className="form_button">Send</button>
        </form>
    )
}


export default ContactForm