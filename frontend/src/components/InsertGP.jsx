import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InsertGP = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");
  const [AdvisorID, setAdvisorID] = useState("");
  const [SemCH, setSemCH] = useState("");
  const [ExpecGradDate, setExpecGradDate] = useState("");
  const [SemCode, setSemCode] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0% 30%",
    justifyContent: "center ",
    height: "100vh",
    width: "40%", // Further decreased height
  };

  const inputStyle = {
    margin: "2%",
    padding: "3%",
    width: "100%", // Further decreased width
    fontSize: "1em", // Further decreased font size
  };

  const buttonStyle = {
    margin: "8%",
    padding: "10px",
    width: "100%", // Further decreased width
    fontSize: "1.2em", // Further decreased font size
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handle = () => {
    axios
      .post("http://localhost:5000/insertGradPlan", {
        Semester_code: SemCode,
        expected_graduation_date: ExpecGradDate,
        sem_credit_hours: SemCH,
        advisor_id: AdvisorID,
        student_id: StudentID,
      })
      .then((arg) => {
        arg.status === 200
          ? alert("Inserted Successfully")
          : alert("Insert Failed");
        navigate("/Advisor");
      });
  };

  return (
    <div style={formStyle}>
      <h2>Insert Graduation Plan</h2>
      <input
        type="text"
        placeholder="SemesterCode"
        value={SemCode}
        onChange={(e) => setSemCode(e.target.value)}
        style={inputStyle}
      />
      <input
        type="date"
        placeholder="ExpectedGraduationDate"
        value={ExpecGradDate}
        onChange={(e) => setExpecGradDate(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="SemesterCreditHours"
        value={SemCH}
        onChange={(e) => setSemCH(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="AdvisorID"
        value={AdvisorID}
        onChange={(e) => setAdvisorID(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="StudentID"
        value={StudentID}
        onChange={(e) => setStudentID(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handle} style={buttonStyle}>
        Insert
      </button>
    </div>
  );
};

export default InsertGP;
