import { useState } from "react";
import axios from "axios";

const ApproveRejectCourse = () => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "200%",
    border: "2px solid #ddd",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const [requestID, setRequestID] = useState("");
  const [TableData, setTableData] = useState([]);

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10% auto", // Center the form on the page
    padding: "20px",
    // border: "1px solid #ccc",
    // borderRadius: "5px",
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

  const handleTable = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/ExtraCourseRequest", {
        advisor_id: localStorage.getItem("CurrLoggedInAdvisor"),
      })
      .then((arg) => setTableData(arg.data));
  };

  const handleRequest = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/Approve_Reject_Course_Request", {
      requestID,
      curr_sem: axios
        .post("http://localhost:5000/getSemCode", {
          request_id: requestID,
        })
        .then((arg) => arg.data),
    });

    axios
      .post("http://localhost:5000/ExtraCourseRequest", {
        advisor_id: localStorage.getItem("CurrLoggedInAdvisor"),
      })
      .then((arg) => setTableData(arg.data));
  };

  return (
    <div style={formStyle}>
      <form>
        <h2>Please Fill The Below Requirements</h2>
        <input
          type="text"
          placeholder="RequestID"
          value={requestID}
          onChange={(e) => setRequestID(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleRequest} style={buttonStyle}>
          Check Eligibility
        </button>
        <button onClick={handleTable} style={buttonStyle}>
          View Requests
        </button>
      </form>

      <table style={tableStyle}>
        <thead>
          <tr style={thTdStyle}>
            {TableData.length > 0 &&
              Object.keys(TableData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {TableData?.map(
            (course = {}, i) =>
              Object.keys(course).length !== 0 && (
                <tr key={i}>
                  {Object.values(course).map((value, k) => (
                    <td key={k}>{value}</td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveRejectCourse;
