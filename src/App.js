import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";
import NewStudentForm from "./components/NewStudentForm";

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

  const addStudentData = (newStudent) => {
    // Duplicate the student list
    const newStudentList = [...studentData];

    // Logic to generate the next valid student ID
    const nextId = Math.max(...newStudentList.map((student) => student.id)) + 1;

    newStudentList.push({
      id: nextId,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });

    setStudentData(newStudentList);
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
      <section>
        <NewStudentForm addStudentCallback={addStudentData}></NewStudentForm>
      </section>
    </main>
  );
}

export default App;
