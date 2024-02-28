import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMakeUpExam = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [course_id, setCourseID] = useState("");

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
        <h2>Please Fill The Requirements</h2>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="CourseID"
          value={course_id}
          onChange={(e) => setCourseID(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/addExam", {
                type,
                date,
                course_id,
              })
              .then((arg) => {
                if (arg.status === 200) {
                  alert("Added Successfully");
                  navigate("/Admin");
                } else {
                  alert("Addition Failed");
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

export default AddMakeUpExam;
