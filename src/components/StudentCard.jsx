function StudentCard({ course }) {
    return (
        <div style={{ border: "5px solid black", margin: "20px", padding: "20px" }}>
            <h3>Course: {course.name}</h3>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>

            {/* At risk */}
            {course.grade < 50 && course.attending === false && (
                <p style={{ color: "red" }}>Ne rrezik</p>
            )}

            {/* Eligible for distinction */}
            {course.grade >= 85 && (
                <p style={{ color: "green" }}>Kalon rezikun</p>
            )}
        </div>
    );
}

export default StudentCard;