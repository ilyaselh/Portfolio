import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { ButtonStyled } from "./styled components/Button1";

export default function Showcase() {
  const style = {
    paddingTop: "10rem"
  };

  return (
    <div className="container text-center" style={style}>
      <div className="row">
        <div className="col">
          <h2 className="text-white">
            Hello, I'm{" "}
            <span style={{ color: "#0092fe", fontWeight: "300" }}>
              Ilyas Harrak.
            </span>
          </h2>
          <h1 className="mb-5">A full-stack web developer</h1>
          <ScrollIntoView selector=".contact">
            <ButtonStyled>Contact me</ButtonStyled>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}
