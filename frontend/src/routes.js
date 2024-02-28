import { createBrowserRouter } from "react-router-dom";
import Choose from "./pages/Choose";
import AdminLoginForm from "./components/AdminLoginForm";
import Student from "./pages/Student";
import StudentLoginReg from "./pages/StudentLoginReg";
import AdvisorLoginReg from "./pages/AdvisorLoginReg";
import Advisor from "./pages/Advisor";
import Admin from "./pages/Admin";
import AddMobileForm from "./components/AddMobileForm";
import RegForFirstMEForm from "./components/RegForFirstMEForm";
import RegForScndMEForm from "./components/RegForScndMEForm";
import ReqExtraCHForm from "./components/ReqExtraCHForm";
import ReqExtraCourseForm from "./components/ReqExtraCourseForm";
import ChooseInstructorForm from "./components/ChooseInstructorForm";
import InsertGP from "./components/InsertGP";
import InsertCourseForGP from "./components/InsertCourseForGP";
import UpdateGradDate from "./components/UpdateGradDate";
import DeleteCourseInGP from "./components/DeleteCourseInGP";
import Tmp1 from "./components/Tmp1";
import Tmp2 from "./components/Tmp2";
import ViewAllMajorStudents from "./components/ViewAllMajorStudents";
import ApproveRejectCH from "./components/ApproveRejectCH";
import ApproveRejectCourse from "./components/ApproveRejectCourse";
import ShowStudentID from "./components/ShowStudentID";
import AdvisorShowID from "./components/AdvisorShowID";
import AddSemester from "./components/AdminAddSemester";
import AddCourse from "./components/AdminAddCourse";
import AdminLinkInstructorCourseSlot from "./components/AdminLinkInstructorCourseSlot";
import AdminLinkStudentAdvisor from "./components/AdminLinkStudentAdvisor";
import DeleteCourseWithSlots from "./components/DeleteCourseWithSlots";
import DeleteSlotForCourse from "./components/DeleteSlotForCourse";
import AddMakeUpExam from "./components/AddMakeUpExam";
import IssueInstallmentForm from "./components/IssueInstallmentForm";
import UpdateStudentStatusForm from "./components/UpdateStudentStatusForm";
import LinkStudentToInstructor from "./components/LinkStudentToInstructor";

//

const router = createBrowserRouter([
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/", //to make sure user doesnt go to another page
    element: <Choose />,
  },
  {
    path: "/AdminLogin",
    element: <AdminLoginForm />,
  },
  {
    path: "/Student",
    element: <Student />,
  },
  {
    path: "/StudentLoginRegister",
    element: <StudentLoginReg />,
  },
  {
    path: "/AdvisorLoginRegister",
    element: <AdvisorLoginReg />,
  },
  {
    path: "/Advisor",
    element: <Advisor />,
  },
  {
    path: "/AddMobileNumber",
    element: <AddMobileForm />,
  },
  {
    path: "/First_Makeup_Registeration",
    element: <RegForFirstMEForm />,
  },
  {
    path: "/Second_Makeup_Registeration",
    element: <RegForScndMEForm />,
  },
  {
    path: "/Extra_Course_Request",
    element: <ReqExtraCourseForm />,
  },
  {
    path: "/Extra_Credit_Hours_Request",
    element: <ReqExtraCHForm />,
  },
  {
    path: "/ChooseInstructor",
    element: <ChooseInstructorForm />,
  },
  {
    path: "/InsertGraduationPlan",
    element: <InsertGP />,
  },
  {
    path: "/InsertCourseInGP",
    element: <InsertCourseForGP />,
  },
  {
    path: "/UpdateGradDate",
    element: <UpdateGradDate />,
  },
  {
    path: "/DeleteCourseInGP",
    element: <DeleteCourseInGP />,
  },
  {
    path: "/ViewCoursesWithExams",
    element: <Tmp1 />,
  },
  {
    path: "/ViewAllCoursesWithSlots",
    element: <Tmp2 />,
  },
  {
    path: "/ViewMajorStudents",
    element: <ViewAllMajorStudents />,
  },
  {
    path: "/ApproveRejectCH",
    element: <ApproveRejectCH />,
  },
  {
    path: "/ApproveRejectCourse",
    element: <ApproveRejectCourse />,
  },
  {
    path: "/ShowStudentID",
    element: <ShowStudentID />,
  },
  {
    path: "/AdvisorShowID",
    element: <AdvisorShowID />,
  },
  {
    path: "/AddCourseForm",
    element: <AddCourse />,
  },
  {
    path: "/AddSemForm",
    element: <AddSemester />,
  },
  {
    path: "/AdminLinkInstructorCourseSlot",
    element: <AdminLinkInstructorCourseSlot />,
  },
  {
    path: "/AdminLinkStudentAdvisor",
    element: <AdminLinkStudentAdvisor />,
  },
  {
    path: "/AdminDeleteCoursesAndSlots",
    element: <DeleteCourseWithSlots />,
  },
  {
    path: "/AdminDeleteSlotForCourse",
    element: <DeleteSlotForCourse />,
  },
  {
    path: "/AdminAddMakeUpExam",
    element: <AddMakeUpExam />,
  },
  {
    path: "/AdminIssueInstallment",
    element: <IssueInstallmentForm />,
  },
  {
    path: "/AdminUpdateStudentStatus",
    element: <UpdateStudentStatusForm />,
  },
  {
    path: "/LinkStudentToInstructor",
    element: <LinkStudentToInstructor />,
  },
]);

export default router;
