// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
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
    width: "100%",
    border: "2px solid #ddd",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const [tableData, setTableData] = useState([]);

  return (
    <div>
      <button onClick={() => navigate("/AddMobileNumber")} style={buttonStyle}>
        AddMobNum
      </button>
      <button
        onClick={() => {
          axios
            .post("http://localhost:5000/viewOptionalCourses", {
              StudentID: localStorage.getItem("CurrLoggedInStudent"),
              studentCurrentsemester_code: "S24",
            })
            .then((arg) => setTableData(arg.data));
          console.log(localStorage.getItem("CurrLoggedInStudent"));
        }}
        style={buttonStyle}
      >
        ViewOptionalCourses
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/getAvailableSemCourses", {
              sem_code: axios
                .post("http://localhost:5000/getStudentSemCode", {
                  StudentID: localStorage.getItem("CurrLoggedInStudent"),
                })
                .then((arg) => arg.data),
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewAvailableCourses
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/viewRequiredCourses", {
              StudentID: localStorage.getItem("CurrLoggedInStudent"),
              studentCurrentsemester_code: "S24",
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewRequiredCourses
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/viewMissingCourses", {
              StudentID: localStorage.getItem("CurrLoggedInStudent"),
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewMissingCourses
      </button>
      <button
        onClick={() => navigate("/Extra_Course_Request")}
        style={buttonStyle}
      >
        RequestExtraCourse
      </button>
      <button
        onClick={() => navigate("/Extra_Credit_Hours_Request")}
        style={buttonStyle}
      >
        RequestExtraCH
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/viewGradPlan_Courses", {
              student_id: localStorage.getItem("CurrLoggedInStudent"),
            })
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewGradplanAndAssignedCourses
      </button>
      <button
        onClick={() =>
          axios
            .post("http://localhost:5000/studentViewFirstNotPaidInstallment", {
              student_id: localStorage.getItem("CurrLoggedInStudent"),
            })
            .then((arg) => alert(`deadline: ${arg.data[0][""]}`))
        }
        style={buttonStyle}
      >
        ViewFirstNotPaidInstallment
      </button>
      <button
        onClick={() => navigate("/ViewCoursesWithExams")}
        style={buttonStyle}
      >
        ViewCoursesWithExams
      </button>
      <button
        onClick={() => navigate("/First_Makeup_Registeration")}
        style={buttonStyle}
      >
        RegisterFor1stMakeup
      </button>
      <button
        onClick={() => navigate("/Second_Makeup_Registeration")}
        style={buttonStyle}
      >
        RegisterFor2ndMakeup
      </button>
      <button
        onClick={() => navigate("/ViewAllCoursesWithSlots")}
        style={buttonStyle}
      >
        ViewSlotCourseInstructor
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getCourse_Slot_Instructor")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewAllCoursesWithSlots
      </button>
      <button onClick={() => navigate("/ChooseInstructor")} style={buttonStyle}>
        ChooseInstructorForCourse
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getCourses_Preq")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        ViewCoursesWithPreq
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

export default Table;
