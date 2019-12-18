import React from "react";

export default function Card(props) {
  const style = {
    width: "20rem",
    height: "20rem",
    background: "#131313",
    marginBottom: "3rem",
    border: "none"
  };

  const imgStyle = {
    width: "4rem"
  };

  return (
    <div className="card mt-5 text-center" style={style}>
      <img
        src={props.pic}
        alt=""
        className="card-img-top mx-auto mt-4"
        style={imgStyle}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "600" }}>
          {props.title}
        </h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}
