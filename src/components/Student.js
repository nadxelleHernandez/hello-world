import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Student.css";

//props: name, email
const Student = (props) => {
  const [isPresent, setIsPresent] = useState(props.isHere);

  const nameColor = isPresent ? "green" : "red";

  const togglePresence = () => {
    setIsPresent(!isPresent);
  };

  return (
    <>
      <ul className={nameColor}>
        <li>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={togglePresence}>
        Toggle if {props.name} is present
      </button>
    </>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isHere: PropTypes.bool.isRequired,
};

Student.defaultProps = {
  name: "John Doe",
  email: "default@email.com",
  isHere: false,
};

export default Student;
