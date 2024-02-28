import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCourse = () => {
  const navigate = useNavigate();

  const [major, setMajor] = useState("");
  const [sem_Num, setSemNum] = useState("");
  const [cred_Hours, setCredHours] = useState("");
  const [course_Name, setCourseName] = useState("");
  const [offered, setOffered] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10% auto", // Center the form on the page
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "50%", // Adjusted width
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    margin: "20px 0",
    padding: "15px",
    width: "100%",
    fontSize: "1.2em",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <form>
        <h2>Add Course</h2>
        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Semester"
          value={sem_Num}
          onChange={(e) => setSemNum(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="CreditHours"
          value={cred_Hours}
          onChange={(e) => setCredHours(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="CourseName"
          value={course_Name}
          onChange={(e) => setCourseName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Offered (0 OR 1)"
          value={offered}
          onChange={(e) => setOffered(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/addCourse", {
                major,
                semester: sem_Num,
                credit_hours: cred_Hours,
                course_name: course_Name,
                offered,
              })
              .then((arg) => {
                if (arg.status === 200) {
                  alert("Added Successfully");
                  navigate("/Admin");
                } else {
                  alert("Failed To Add");
                  navigate("/Admin");
                }
              });
          }}
          style={buttonStyle}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
