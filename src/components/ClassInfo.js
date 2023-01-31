import React from "react";
import PropTypes from "prop-types";

//props: numStudents
const ClassInfo = (props) => {
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.numStudents}</li>
      </ul>
      <button onClick={props.onDeleteAllStudents}>Delete all students</button>
    </section>
  );
};

ClassInfo.propTypes = {
  numStudents: PropTypes.number.isRequired,
  onDeleteAllStudents: PropTypes.func.isRequired,
};

export default ClassInfo;
