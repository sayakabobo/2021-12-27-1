import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/adress.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

function Contact() {
  const userID = process.env.REACT_APP_USER_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, formRef.current, userID).then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 34565
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              XXXXXXX@XXXXX.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            maxime id minima itaque facere, dicta possimus quidem! Ea, eius ab.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              id=""
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            <p className="c-response">
              {done && "Message sent! Thank you for Email ♡"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
