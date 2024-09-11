import React from "react";
import "../Css/Header.css";
import gtec from "./Images/gtec.png";
import Popup from "reactjs-popup";
import Enquiry from "./Pages/Enquiry";
import call from "./Images/call.svg";
import calling from "./Images/calling.svg";
import whatsapp from "./Images/whatsapp.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="Hearder">
      <a href="" className="logo">
        <img src={gtec} alt="G-TEC LOGO" />
      </a>
      <div className="container">
        <Nav />

        <a className="phno" href="tel:9788884850">
          <img src={call} alt="call" />
          9788884850
        </a>
      </div>
      <h1>The Education You Want The Attention You Deserve</h1>
      <div className="">
        <div className="countact">
          <a href="https://wa.me/9788884850" className="whatsapp">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a href="tel:9788884850" className="call">
            <img src={calling} alt="Call" />
          </a>
        </div>
        <div className="enquiry_btn">
          <Popup
            trigger={<button className="Enquiry_btn">QUICK ENQUIRY</button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
               
                <Enquiry />
              </div>
            )}
          </Popup>
        </div>
      </div>
    </header>
  );
}

export default Header;
