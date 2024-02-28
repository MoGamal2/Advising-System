import { useNavigate } from "react-router-dom";

const ButtonPage = () => {
  const navigate = useNavigate();

  const headingStyle = {
    fontSize: "253%", // Adjust as needed
    color: "beige",
    whiteSpace: "nowrap", // Ensures the title is written horizontally
    backgroundColor: "black",
  };

  const buttonStyle = {
    margin: "1%",
    fontSize: "250%",
    width: "15%", // Set a fixed width
    height: "20%", // Set a fixed height
    borderRadius: "20%",
    fontFamily: "Fantasy, Copperplate",
    color: "beige",
    backgroundColor: "black",
    cursor: "Pointer",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Adjust the height based on your needs
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>WELCOME TO THE STUDENT ADVISING SYSTEM</h1>
      <button style={buttonStyle} onClick={() => navigate("AdminLogin")}>
        Admin
      </button>
      <button
        style={buttonStyle}
        onClick={() => navigate("/AdvisorLoginRegister")}
      >
        Advisor{" "}
      </button>
      <button
        style={buttonStyle}
        onClick={() => navigate("/StudentLoginRegister")}
      >
        Student
      </button>
    </div>
  );
};

export default ButtonPage;
