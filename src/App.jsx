import { useState, useCallback } from "react";
import StudentCard from "./components/StudentCard";
import RegisterCourse from "./components/RegisterCourse";


//// useCallback is used to avoid recreating the function on every render

function App() {

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Operating System",
      credits: 6,
      grade: 9,
      attending: true,
      difficulty: "Hard",
    },
    {
      id: 2,
      name: "Databases",
      credits: 6,
      grade: 10,
      attending: true,
      difficulty: "Moderate",
    },
    {
      id: 3,
      name: "Staticstics",
      credits: 6,
      grade: 10,
      attending: false,
      difficulty: "Hard",
    },
    {
      id: 4,
      name: "Client Side Programming",
      credits: 6,
      grade: 10,
      attending: true,
      difficulty: "Easy",
    },
  ]);

  const addCourse = useCallback((newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  }, []);

  return (
      <div style={{ padding: "20px" }}>
        <h1>Emri: Alma Rustemi</h1>
        <h2>ID: 132884</h2>


        <p>These are my enrolled courses for this semester:</p>

        {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
        ))}

        <hr />

        <RegisterCourse onAdd={addCourse} />
      </div>

  );


}

export default App;