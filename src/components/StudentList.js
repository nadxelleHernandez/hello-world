import React from "react";
import "./StudentList.css";

const StudentList = () => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>
        <li>Student A</li>
        <li>Student B</li>
        <li>Student C</li>
      </ul>
    </section>
  );
};

export default StudentList;
