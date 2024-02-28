import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ReqExtraCHForm = () => {
  const navigate = useNavigate();

  const [StudentID, setStudentID] = useState("");
  const [CredHours, setCredHours] = useState("");
  const [Type, setType] = useState("");
  const [Comment, setComment] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10% auto", // Center the form on the page
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "50%", // Adjusted width for better responsiveness
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

  const handleRequest = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/sendingExtraHoursReq", {
        studentID: StudentID,
        credit_hours: CredHours,
        type: Type,
        comment: Comment,
      })
      .then((arg) => {
        arg.status == 200 ? alert("Request Sent") : alert("Request Failed");
        navigate("/Student");
      });
  };

  return (
    <div style={formStyle}>
      <form>
        <h2>Request Extra Credit Hours</h2>
        <input
          type="text"
          placeholder="StudentID"
          value={StudentID}
          onChange={(e) => setStudentID(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="CreditHours"
          value={CredHours}
          onChange={(e) => setCredHours(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Type"
          value={Type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Comment"
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleRequest} style={buttonStyle}>
          Request
        </button>
      </form>
    </div>
  );
};

export default ReqExtraCHForm;
