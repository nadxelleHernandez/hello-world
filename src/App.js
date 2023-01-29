import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentData = [
    {
      nameData: "Ada",
      isHere: true,
    },
    {
      nameData: "Nad",
      emailData: "Nad@dev.org",
      isHere: true,
    },
    {
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
