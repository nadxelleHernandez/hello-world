import React from "react";
import PropTypes from "prop-types";
import "./Student.css";

//props: name, email
const Student = (props) => {
  const nameColor = props.isHere ? "green" : "red";

  const onAttendanceButtonClick = () => {
    const updatedStudent = {
      id: props.id,
      nameData: props.name,
      emailData: props.email,
      isHere: !props.isHere,
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    props.onUpdate(updatedStudent);
  };
  return (
    <>
      <ul className={nameColor}>
        <li>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onAttendanceButtonClick}>
        Toggle if {props.name} is present
      </button>
    </>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isHere: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

Student.defaultProps = {
  name: "John Doe",
  email: "default@email.com",
  isHere: false,
};

export default Student;
