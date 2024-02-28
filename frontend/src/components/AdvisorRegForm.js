import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdvisorRegForm = () => {
  const navigate = useNavigate();

  const [advisorName, setAdvisorName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [office, setOffice] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
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

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/advisor_Reg", {
        advisor_name: advisorName,
        password,
        email,
        office,
      })
      .then((arg) => {
        if (arg.status === 200) {
          navigate("/AdvisorShowID");
        }
      });
  };

  return (
    <div style={formStyle}>
      <form></form>
      <h2>Advisor Registration</h2>
      <input
        type="text"
        placeholder="Advisor Name"
        value={advisorName}
        onChange={(e) => setAdvisorName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Office"
        value={office}
        onChange={(e) => setOffice(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handleRegister} style={buttonStyle}>
        Register
      </button>
    </div>
  );
};

export default AdvisorRegForm;
