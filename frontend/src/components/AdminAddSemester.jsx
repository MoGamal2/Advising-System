import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSemester = () => {
  const navigate = useNavigate();

  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [semCode, setSemCode] = useState("");

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
        <h2>Add Semester</h2>
        <input
          type="date"
          placeholder="StartDate"
          value={start_date}
          onChange={(e) => setStartDate(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="date"
          placeholder="EndDate"
          value={end_date}
          onChange={(e) => setEndDate(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="SemesterCode"
          value={semCode}
          onChange={(e) => setSemCode(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/addSemester", {
                start_date,
                end_date,
                sem_code: semCode,
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

export default AddSemester;
