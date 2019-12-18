import React from "react";
import ScrollIntoView from "react-scroll-into-view";

export default function Navbar() {
  const style = {
    background: "",
    color: "white"
  };

  return (
    <nav className="navbar navbar-expand-lg pt-3" style={style}>
      <div className="container">
        <div className="m-auto">
          <ul className="navbar-nav">
            <li className="navbar-item" style={{ cursor: "pointer" }}>
              <ScrollIntoView selector=".top">Home</ScrollIntoView>
            </li>
            <li className="navbar-item pl-5" style={{ cursor: "pointer" }}>
              <ScrollIntoView selector=".portfolio">Portfolio</ScrollIntoView>
            </li>
            <li className="navbar-item pl-5" style={{ cursor: "pointer" }}>
              <ScrollIntoView selector=".contact">Contact</ScrollIntoView>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
