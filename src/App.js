import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import PortfolioItem from "./components/PortfolioItem";
import ContactForm from "./components/ContactForm";
import Fade from "react-reveal/Fade";

import background from "./assets/background.png";
import desk from "./assets/desk.png";
import pc from "./assets/pc.png";
import phone from "./assets/phone.png";
import Screenshot1 from "./assets/Screenshot1.png";
import Card from "./components/Card";

function App() {
  const style = {
    background: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh"
  };

  return (
    <div
      className="App main text-white"
      style={{ fontFamily: "Raleway", background: "#131313" }}
    >
      <div style={style} className="top">
        <Navbar />
        <Showcase />
      </div>

      <div
        style={{
          borderBottom: "1px solid #0e83ff",
          marginBottom: "1.5rem",
          boxShadow: "0px 0px 15px 5px rgba(0, 147, 255, 0.25)"
        }}
      ></div>

      <div className="container services">
        <Fade bottom>
          <h1 className="text-center">Services</h1>
          <div className="row">
            <div className="col">
              <Card
                pic={desk}
                title="Plan & Design"
                text="lorem ipsum some text here i cant think of anything right now i fucked the queen"
              />
            </div>
            <div className="col">
              <Card
                pic={pc}
                title="Web development"
                text="lorem ipsum some text here i cant think of anything right now i fucked the queen"
              />
            </div>
            <div className="col">
              <Card
                pic={phone}
                title="Mobile Friendly"
                text="lorem ipsum some text here i cant think of anything right now i fucked the queen"
              />
            </div>
          </div>
        </Fade>
      </div>

      <div
        style={{
          borderBottom: "1px solid #0e83ff",
          marginBottom: "1.5rem",
          boxShadow: "0px 0px 15px 5px rgba(0, 147, 255, 0.25)"
        }}
      ></div>

      <div className="container portfolio">
        <Fade bottom>
          <h1 className="text-center">Portfolio</h1>
          <PortfolioItem
            title="Power Logger"
            text="Power Logger is a personal project that started from my love of strength sports. The goal of this web app is to log and store your training in a easy way. It encorperates the use of the RPE scale, volume, and intensity, which are a part of every strength programe"
            pic={Screenshot1}
          />
        </Fade>
      </div>

      <div
        style={{
          borderBottom: "1px solid #0e83ff",
          marginBottom: "4rem",
          boxShadow: "0px 0px 15px 5px rgba(0, 147, 255, 0.25)"
        }}
      ></div>
      <Fade bottom>
        <h1 className="text-center">Contact</h1>

        <ContactForm />
      </Fade>
    </div>
  );
}

export default App;
