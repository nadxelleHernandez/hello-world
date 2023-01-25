import React from "react";
import Student from "./Student";
import "./StudentList.css";

//props: students  (array with all students to display)
const StudentList = (props) => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  const studentComponents = props.students.map((student) => {
    return (
      <li>
        <Student name={student.nameData} email={student.emailData}></Student>
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

export default StudentList;
