import React from "react";
import Student from "./Student";
import "./StudentList.css";
import PropTypes from "prop-types";

//props: students  (array with all students to display)
const StudentList = (props) => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  const studentComponents = props.students.map((student) => {
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isHere={student.isHere}
          onUpdate={props.onUpdateStudent}
        ></Student>
      </li>
    );
  });
  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>{studentComponents}</ul>
    </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isHere: PropTypes.bool,
    })
  ),
  onUpdateStudent: PropTypes.func.isRequired,
};

export default StudentList;
