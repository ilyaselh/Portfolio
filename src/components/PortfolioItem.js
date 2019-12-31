import React from "react";
import { ButtonStyled } from "../components/styled components/Button1";

export default function PortfolioItem(props) {
  const imgStyle = {
    width: "25rem",
    boxShadow: "0px 0px 5px 1px rgba(0, 147, 255, 0.25)"
  };

  return (
    <>
      <div className="row align-items-center mb-5">
        <div className="col">
          <h2 className="mb-5" style={{ fontWeight: "600", color: "#0093ff" }}>
            {props.title}
          </h2>
          <p className="mb-5">{props.text}</p>
          <a href="https://powerliftlogger.herokuapp.com/" target="_blank">
            <ButtonStyled sm>see live</ButtonStyled>
          </a>
          <a href="https://github.com/ilyaselh/powerlogger" target="_blank">
            <ButtonStyled sm inverse>
              source code
            </ButtonStyled>
          </a>
        </div>
        <div className="col text-right">
          <img src={props.pic} alt="" style={imgStyle} />
        </div>
      </div>
    </>
  );
}
