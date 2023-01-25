import React from "react";
import PropTypes from "prop-types";

//props: name, email
const Student = (props) => {
  return (
    <ul>
      <li>Nickname: {props.name}</li>
      <li>Email: {props.email}</li>
    </ul>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Student.defaultProps = {
  name: "John Doe",
  email: "default@email.com",
};

export default Student;
