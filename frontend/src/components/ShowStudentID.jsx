import { useState } from "react";
import axios from "axios";

const ShowStudentID = () => {
  const [header, setHeader] = useState("");

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
    alignItems: "center",
  };

  const headerStyle = {
    marginBottom: "20px",
    fontSize: "1.5em",
    color: "#333",
    alignItems: "ceneter    ",
  };

  return (
    <div style={formStyle}>
      <form>
        <h2 style={headerStyle}>
          Registered Successfully. PRESS VIEW TO ACCESS YOUR ID: {header}
        </h2>

        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .get("http://localhost:5000/getLatestStudent")
              .then((arg) => setHeader(arg.data[0]["maximum"]));
          }}
          style={buttonStyle}
        >
          VIEW
        </button>
      </form>
    </div>
  );
};

export default ShowStudentID;
