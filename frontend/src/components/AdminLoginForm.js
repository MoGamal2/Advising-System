import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AdminLoginForm = () => {
  const navigate = useNavigate();

  const [admin_id, setAdmin_id] = useState("");
  const [admin_password, setAdmin_Password] = useState("");

  const id = "1";
  const password = "123";

  const handleLogin = () => {
    if (admin_id == id && admin_password == password) {
      alert("Login Successful");
      navigate("/Admin");
    }
  };

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

  return (
    <div style={formStyle}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="UserID"
        value={admin_id}
        onChange={(e) => setAdmin_id(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={admin_password}
        onChange={(e) => setAdmin_Password(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleLogin} style={buttonStyle}>
        Log In
      </button>
    </div>
  );
};

export default AdminLoginForm;
