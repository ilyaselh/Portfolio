import React from "react";
import * as emailjs from "emailjs-com";
import { ButtonStyled } from "./styled components/Button1";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    let templateParams = {
      from_name: this.state.email,
      to_name: "ilyaselh@gmail.com",
      subject: this.state.name,
      message_html: this.state.message
    };

    emailjs.send(
      "gmail",
      "template_GoAAm2u8",
      templateParams,
      "user_qTWSU3BrONi10dUOTwaIb"
    );

    console.log(this.state.name);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    const rightStyle = {
      background: "#0e83ff",
      borderTopRightRadius: "1.5rem",
      borderBottomRightRadius: "1.5rem",
      color: "white",
      padding: "1rem 0rem",
      boxShadow: "5px 7px 5px 0px rgba(0, 0, 0, 0.2)"
    };

    const leftStyle = {
      background: "#1b1b1b",
      borderTopLeftRadius: "1.5rem",
      borderBottomLeftRadius: "1.5rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "2rem",
      paddingTop: "1rem",
      boxShadow: "5px 7px 5px 0px rgba(0, 0, 0, 0.2)"
    };

    return (
      <div className="container pt-4 pb-5 contact">
        <div className="row h-100">
          <div className="col-8" style={leftStyle}>
            <h3 className="text-center">Contact me</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{ color: "#0e83ff", fontWeight: "600" }}
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-dark"
                  placeholder="Enter your full name"
                  id="name"
                  style={{ border: "none", color: "white" }}
                  onChange={this.handleChange.bind(this, "name")}
                />
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      style={{ color: "#0e83ff", fontWeight: "600" }}
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-dark"
                      placeholder="Enter your E-mail address"
                      id="email"
                      style={{ border: "none", color: "white" }}
                      onChange={this.handleChange.bind(this, "email")}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="msg"
                  style={{ color: "#0e83ff", fontWeight: "600" }}
                >
                  Message
                </label>
                <textarea
                  style={{ border: "none", color: "white" }}
                  rows="6"
                  name="messsage"
                  type="text"
                  className="form-control bg-dark"
                  placeholder="Type your message here"
                  id="msg"
                  onChange={this.handleChange.bind(this, "message")}
                />
              </div>
              <ButtonStyled sm type="submit">
                Send
              </ButtonStyled>
            </form>
          </div>
          <div className="col-4" style={rightStyle}>
            <h3 className="text-center">Contact information</h3>
            <div style={{ paddingTop: "7rem", paddingLeft: "2rem" }}>
              <div className="pb-4">
                <i className="fas fa-user-tie fa-lg pr-3"></i>
                <span className="pb-3" style={{ fontWeight: "600" }}>
                  ilyas el harrak
                </span>
              </div>
              <div className="pb-4">
                <i className="fas fa-phone fa-lg pr-3"></i>
                <span className="pb-3" style={{ fontWeight: "600" }}>
                  phone number here
                </span>
              </div>
              <div className="pb-4">
                <i className="fas fa-globe fa-lg pr-3"></i>
                <span className="pb-3" style={{ fontWeight: "600" }}>
                  ilyaselh@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
