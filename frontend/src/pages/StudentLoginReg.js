import LoginForm from "../components/LoginForm";
import StudentRegForm from "../components/StudentRegForm";

const StudentLoginReg = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-evenly",
        height: "100%",
      }}
    >
      <LoginForm />
      <StudentRegForm />
    </div>
  );
};

export default StudentLoginReg;
