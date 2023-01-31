import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isHere: true,
    },
    {
      id: 2,
      nameData: "Nad",
      emailData: "Nad@dev.org",
      isHere: true,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isHere: false,
    },
  ]);

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  const deleteAllStudents = () => {
    setStudentData([]);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo
        numStudents={studentData.length}
        onDeleteAllStudents={deleteAllStudents}
      ></ClassInfo>
      <StudentList
        students={studentData}
        onUpdateStudent={updateStudentData}
      ></StudentList>
    </main>
  );
}

export default App;
