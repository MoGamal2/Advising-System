//ask about "Approve/Reject" (how to handle frontend)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdvisorTable = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "150%",
    borderSpacing: "0",
    border: "2px solid black",
  };

  const thTdStyle = {
    border: "1px solid black",
    padding: "8px",
    margin: "2px",
    textAlign: "left",
  };

  const [tableData, setTableData] = useState([]);

  return (
    <div>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/advisorGetHisStudents", {
              advisor_id: localStorage.getItem("CurrLoggedInAdvisor"),
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewAllAdvisingStudents
      </button>
      <button
        onClick={() => navigate("/InsertGraduationPlan")}
        style={buttonStyle}
      >
        InsertGP
      </button>
      <button onClick={() => navigate("/InsertCourseInGP")} style={buttonStyle}>
        Insert Courses In GP
      </button>
      <button onClick={() => navigate("/UpdateGradDate")} style={buttonStyle}>
        Update Expected Graduation Date
      </button>
      <button onClick={() => navigate("/DeleteCourseInGP")} style={buttonStyle}>
        Delete Course From Plan
      </button>
      <button
        onClick={() => navigate("/ViewMajorStudents")}
        style={buttonStyle}
      >
        View Students From A Certain Major
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/getReqs_Advisor", {
              advisor_id: localStorage.getItem("CurrLoggedInAdvisor"),
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        View All Requests
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/getPendingReqsForAdvisor", {
              advisorID: localStorage.getItem("CurrLoggedInAdvisor"),
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        View Pending Requests
      </button>
      <button onClick={() => navigate("/ApproveRejectCH")} style={buttonStyle}>
        Approve/Reject Extra CH Request
      </button>
      <button
        onClick={() => navigate("/ApproveRejectCourse")}
        style={buttonStyle}
      >
        Approve/Reject Extra Course Request
      </button>

      <table style={tableStyle}>
        <thead>
          <tr style={thTdStyle}>
            {tableData.length > 0 &&
              Object.keys(tableData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map(
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

export default AdvisorTable;
