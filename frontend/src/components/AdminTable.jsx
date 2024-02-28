import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminTable = () => {
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
    width: "200%",
    height: "200%",
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
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/all_Advisors")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List All Advisors
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/all_Students_Advisors")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List All Students With Advisors
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/allPendingReq")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List All Pending Requests
      </button>
      <button onClick={() => navigate("/AddSemForm")} style={buttonStyle}>
        Add Semester
      </button>
      <button onClick={() => navigate("/AddCourseForm")} style={buttonStyle}>
        Add Course
      </button>
      <button
        onClick={() => navigate("/AdminLinkInstructorCourseSlot")}
        style={buttonStyle}
      >
        Link Instructor To Course On Slot
      </button>
      <button
        onClick={() => navigate("/AdminLinkStudentAdvisor")}
        style={buttonStyle}
      >
        Link Student To An Advisor
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getInstructor_Course")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List Instructors With Assigned Courses
      </button>
      <button
        onClick={() => navigate("/LinkStudentToInstructor")}
        style={buttonStyle}
      >
        Link Student To Instructor
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getSem_Course")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        View Semester With Offered Courses
      </button>
      <button
        onClick={() => navigate("/AdminDeleteCoursesAndSlots")}
        style={buttonStyle}
      >
        Delete Course Along With Its Slots
      </button>
      <button
        onClick={() => navigate("/AdminDeleteSlotForCourse")}
        style={buttonStyle}
      >
        Delete Slot For Course
      </button>
      <button
        onClick={() => navigate("/AdminAddMakeUpExam")}
        style={buttonStyle}
      >
        Add MakeUp Exam
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getPayment_Student")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List Student Payments
      </button>
      <button
        onClick={() => navigate("/AdminIssueInstallment")}
        style={buttonStyle}
      >
        Issue Installment For Student
      </button>
      <button
        onClick={() => navigate("/AdminUpdateStudentStatus")}
        style={buttonStyle}
      >
        Update Student Status
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getStudents")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List All Students
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getGradPlan_Advisors")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List Graduation Plans With Their Advisors
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getStudent_Course")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        List Students With Their Transcript Details
      </button>
      <button
        onClick={() =>
          axios
            .get("http://localhost:5000/getSem_Course")
            .then((arg) => setTableData(arg.data))
        }
        style={buttonStyle}
      >
        Semester With Offered Courses
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

export default AdminTable;
