import styled from "styled-components";

const ButtonStyled = styled.button`
  transition: all 0.25s ease-in-out;
  height: ${props => (props.sm ? "2rem" : "2.75rem")};
  width: ${props => (props.sm ? "12rem" : "15rem")};
  font-size: ${props => (props.sm ? "1rem" : "1.2rem")};
  font-weight: ${props => (props.sm ? "500" : "500")};
  border-style: none;
  color: ${props => (props.inverse ? "#000000" : "#ffffff")};
  cursor: pointer;
  background: ${props => (props.inverse ? "#dddddd" : "#0092fe")};
  padding: ${props => (props.inverse ? "0.3rem 2rem" : "0.3rem 0rem")};
  margin-left: ${props => (props.inverse ? "1rem" : "0rem")};
  border-radius: 1.5rem;
  box-shadow: ${props =>
    props.inverse ? null : "0px 0px 25px 5px rgba(0, 147, 255, 0.25)"};
  &:hover {
    background: ${props => (props.inverse ? "#b6b6b6" : "#006ab8")};
  }
`;

export { ButtonStyled };
