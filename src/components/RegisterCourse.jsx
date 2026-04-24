import { useState, useRef } from "react";

function RegisterCourse({ onAdd }) {
    const [name, setName] = useState("");
    const [credits, setCredits] = useState("");
    const [grade, setGrade] = useState("");
    const [attending, setAttending] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy");

    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            alert("Course name is required");
            nameRef.current.focus();
            return;
        }

        if (grade < 5 || grade > 10) {
            alert("Grade must be between 5 and 10");
            return;
        }

        const newCourse = {
            id: Date.now(),
            name,
            credits: Number(credits),
            grade: Number(grade),
            attending,
            difficulty,
        };

        onAdd(newCourse);

        setName("");
        setCredits("");
        setGrade("");
        setAttending(false);
        setDifficulty("Easy");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3  style={{ color: "blue" }}> Register New Course</h3>

            <input
                ref={nameRef}
                type="text"
                placeholder="Course Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
                type="number"
                placeholder="Credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
            />
            <br />

            <input
                type="number"
                placeholder="Grade (5-10)"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <br />

            <label>
                Attending:
                <input
                    type="checkbox"
                    checked={attending}
                    onChange={(e) => setAttending(e.target.checked)}
                />
            </label>
            <br />

            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
            </select>
            <br />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterCourse;