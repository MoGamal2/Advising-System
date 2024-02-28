import AdvisorLogin from "../components/AdvisorLogin";
import AdvisorRegForm from "../components/AdvisorRegForm";

const AdvisorLoginReg = () => {
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
      <AdvisorLogin />
      <AdvisorRegForm />
    </div>
  );
};

export default AdvisorLoginReg;
