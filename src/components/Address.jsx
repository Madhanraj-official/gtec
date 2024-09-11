import React from "react";
import gtec from "./Images/gtec.png";
import Nav from "./Nav";
import call from "./Images/call.svg";
import map from './Images/map.svg'
function Address() {
  return (
    <div className="left">
      <div>
        <a href="" className="logo">
          <img src={gtec} alt="G-TEC LOGO" />
        </a>
        <div className="address">
            <img src={map} alt="map" />
          <address>
            Nazeem Complex
            <br />
            near to Bus Stand
            <br />
            Gandhi Nagar
            <br />
            Koranad
            <br />
            Mayiladuthurai
            <br />
            Tamil Nadu 609001
          </address>
        </div>

        <div>
          <img src={call} alt="call" />
          <div className="call">
            <a className="phno" href="tel:9788884850">
              9788884850
            </a>
            <a className="phno" href="tel:8056338566">
              8056338566
            </a>
          </div>
        </div>
        <div className="soical">
          <a href="#">fb</a>
          <a href="#">in</a>
          <a href="#">yt</a>
          <a href="#">g</a>
        </div>
      </div>
      <div className="mainlink">
        <h3>Main Links</h3>
        <Nav />
      </div>
    </div>
  );
}

export default Address;
