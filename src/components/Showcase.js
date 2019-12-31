import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { ButtonStyled } from "./styled components/Button1";

export default function Showcase() {
  const style = {
    paddingTop: "30vh"
  };

  return (
    <div className="container text-center" style={style}>
      <div className="row">
        <div className="col">
          <h1 className="text-white mb-2">
            Hello, I'm{" "}
            <span style={{ color: "#0092fe", fontWeight: "400" }}>
              Ilyas Harrak.
            </span>
          </h1>
          <h1 className="mb-5">I'm a Full-stack web developer</h1>
          <div className="row">
            <div className="col text-right">
              <ScrollIntoView selector=".contact">
                <ButtonStyled>Contact me</ButtonStyled>
              </ScrollIntoView>
            </div>
            <div className="col text-left">
              <ScrollIntoView selector=".portfolio">
                <ButtonStyled inverse>Portfolio</ButtonStyled>
              </ScrollIntoView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
