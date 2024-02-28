import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdvisorLogin = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/advisorLogin", {
        id: userID,
        password,
      })
      .then((arg) => {
        if (arg.data[0][""]) {
          alert("login successful");
          navigate("/Advisor");
          localStorage.setItem("CurrLoggedInAdvisor", userID);
        } else {
          alert("login failed");
        }
      });
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh", // Further decreased height
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

  return (
    <div style={formStyle}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="UserID"
        value={userID}
        onChange={(e) => {
          setUserID(e.target.value);
        }}
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleLogin} style={buttonStyle}>
        Log In
      </button>
    </div>
  );
};

export default AdvisorLogin;
