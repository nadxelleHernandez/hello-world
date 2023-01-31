import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentData = [
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
  ];
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numStudents={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
