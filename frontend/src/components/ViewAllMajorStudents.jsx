import { useState } from "react";
import axios from "axios";

const ViewAllMajorStudents = () => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    border: "2px solid #ddd",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const [major, setMajor] = useState("");
  const [TableData, setTableData] = useState([]);

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
      .post("http://localhost:5000/getStudents_Advisors_inSpecificMajor", {
        advisorID: localStorage.getItem("CurrLoggedInAdvisor"),
        major,
      })
      .then((arg) => setTableData(arg.data));
  };

  return (
    <div style={formStyle}>
      <form>
        <h2>Please Fill The Below Requirements</h2>
        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleRequest} style={buttonStyle}>
          View
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

export default ViewAllMajorStudents;
