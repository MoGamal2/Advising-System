require("dotenv").config();
const sql = require("mssql/msnodesqlv8");

const config = require("./dbConfig.js");

let connectionCount = 0;

const log = (message) => {
  console.log(`[mssql] ${message}`);
};

const pool = new sql.ConnectionPool(config);
pool.on("connect", (connection) => {
  connectionCount += 1;
  console.log(
    `[ConnectionPool] Connection established. Current connection count: ${connectionCount}`
  );
});

pool.on("close", (connection) => {
  connectionCount -= 1;
  console.log(
    `[ConnectionPool] Connection closed. Current connection count: ${connectionCount}`
  );
});

pool.connect((error) => console.log(error));

const getStudents = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM view_Students`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getCourses_Preq = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM view_Course_prerequisites`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getInstructor_Course = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM Instructors_AssignedCourses`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getPayment_Student = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM Student_Payment`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getCourse_Slot_Instructor = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM Courses_Slots_Instructor`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getCourse_Exam = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM Courses_MakeupExams`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getStudent_Course = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM Students_Courses_transcript`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getSem_Course = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM  Semster_offered_Courses`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getGradPlan_Advisors = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM  Advisors_Graduation_Plan`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const student_Reg = async (
  f_name,
  l_name,
  password,
  faculty,
  email,
  major,
  Semester
) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `declare @X int
      EXEC Procedures_StudentRegistration '${f_name}','${l_name}','${password}','${faculty}','${email}','${major}',${Semester} , @x output`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const advisor_Reg = async (advisor_name, password, email, office) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `declare @X int
      EXEC Procedures_AdvisorRegistration '${advisor_name}','${password}','${email}','${office}', @x output`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const all_Advising_Students = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`EXEC Procedures_AdminListStudents`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const all_Advisors = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`EXEC Procedures_AdminListAdvisors`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const all_Students_Advisors = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`EXEC AdminListStudentsWithAdvisors`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const addSemester = async (start_date, end_date, sem_code) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC AdminAddingSemester '${start_date}','${end_date}','${sem_code}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const addCourse = async (
  major,
  semester,
  credit_hours,
  course_name,
  offered
) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdminAddingCourse '${major}',${semester},${credit_hours},'${course_name}','${offered}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const link_Instructor_Course_Slot = async (InstructorId, courseId, slotID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdminLinkInstructor ${InstructorId},${courseId},${slotID}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const link_Student_Course_Instructor = async (
  course_id,
  InstructorId,
  student_id,
  sem_code
) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdminLinkStudent ${course_id},${InstructorId},${student_id},'${sem_code}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const link_Student_Advisor = async (student_id, advisor_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedures_AdminLinkStudentToAdvisor ${student_id},${advisor_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const addExam = async (type, date, course_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedures_AdminAddExam '${type}','${date}',${course_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const issueInstallments = async (payment_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedures_AdminIssueInstallment ${payment_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const del_Courses_Slots = async (course_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC   Procedures_AdminDeleteCourse ${course_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//AdminCheckStudentStatus

const update_Student_Status = async (student_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedure_AdminUpdateStudentStatus ${student_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const allPendingReq = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`SELECT * FROM all_Pending_Requests`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const del_Courses_notOffered = async (curr_sem) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdminDeleteSlots '${curr_sem}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//might cause error
const advisorLogin = async (id, password) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT dbo.FN_AdvisorLogin(${id}, '${password}')`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

const insertGradPlan = async (
  Semester_code,
  expected_graduation_date,
  sem_credit_hours,
  advisor_id,
  student_id
) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorCreateGP '${Semester_code}','${expected_graduation_date}',${sem_credit_hours},${advisor_id},${student_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const addCourse_in_StudentPlan = async (
  student_id,
  Semester_code,
  course_name
) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorAddCourseGP
      ${student_id},'${Semester_code}','${course_name}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const updateExpecGradDate = async (expected_grad_date, studentID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorUpdateGP
      '${expected_grad_date}',${studentID}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const delCourse_inGradPlan = async (studentID, semester_code, courseID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorDeleteFromGP
        ${studentID},'${semester_code}',${courseID}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getReqs_Advisor = async (advisor_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT * FROM dbo.FN_Advisors_Requests(${advisor_id})`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

const Approve_Reject_CredHours_Request = async (requestID, curr_sem) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorApproveRejectCHRequest
          ${requestID},'${curr_sem}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getStudents_Advisors_inSpecificMajor = async (advisorID, major) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorViewAssignedStudents
            ${advisorID},'${major}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//Fucntion CheckPreq

const Approve_Reject_Course_Request = async (requestID, curr_sem_code) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorApproveRejectCourseRequest
              ${requestID},'${curr_sem_code}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getPendingReqsForAdvisor = async (advisorID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_AdvisorViewPendingRequests
                ${advisorID}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//might cause error
const studentLogin = async (student_id, password) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT dbo.FN_StudentLogin(${student_id},'${password}')`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

const addStudentMobile = async (studentID, mobile_num) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_StudentaddMobile ${studentID},'${mobile_num}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//might cause error
const getAvailableSemCourses = async (sem_code) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT * FROM dbo.FN_SemsterAvailableCourses('${sem_code}')`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

// const getCoursesInCurrentSem = async (studentID, courseID, type, comment) => {
//   try {
//     let request = pool.request();
//     let exec = await request.query(
//       `EXEC Procedures_StudentSendingCourseRequest ${studentID},${courseID},'${type}','${comment}'`
//     );
//     return exec;
//   } catch (error) {
//     console.log(error);
//   }
// };

const sendingExtraCourseReq = async (studentID, courseID, type, comment) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedures_StudentSendingCourseRequest ${studentID},${courseID},'${type}','${comment}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const sendingExtraHoursReq = async (studentID, credit_hours, type, comment) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedures_StudentSendingCHRequest ${studentID},${credit_hours},'${type}','${comment}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//might cause error
const viewGradPlan_Courses = async (student_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT * FROM  dbo.FN_StudentViewGP(${student_id})`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

//ask
const studentViewFirstNotPaidInstallment = async (student_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT dbo.FN_StudentUpcoming_installment(${student_id})`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

//might cause error
const viewCourseSlots_TaughtBy_Instructor = async (courseID, instructorID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT * FROM dbo.FN_StudentViewSlot(${courseID},${instructorID})`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

const regFirstMakeup = async (StudentID, courseID, studentCurrentsemester) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_StudentRegisterFirstMakeup ${StudentID},${courseID},'${studentCurrentsemester}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

//might cause error
const checkEligibleScndMakeup = async (courseID, studentID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `SELECT dbo.FN_StudentCheckSMEligiability(${courseID},${studentID})`
    );
    return exec;
  } catch (error) {
    console.error(error);
  }
};

const regScndMakeup = async (StudentID, courseID, studentCurrentsemester) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC   Procedures_StudentRegisterSecondMakeup ${StudentID},${courseID},'${studentCurrentsemester}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const viewRequiredCourses = async (StudentID, studentCurrentsemester_code) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_ViewRequiredCourses
      ${StudentID},'${studentCurrentsemester_code}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const viewOptionalCourses = async (StudentID, studentCurrentsemester_code) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_ViewOptionalCourse
        ${StudentID},'${studentCurrentsemester_code}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const viewMissingCourses = async (StudentID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  Procedures_ViewMS
          ${StudentID}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const chooseInstructorForCourse = async (
  student_id,
  instructor_id,
  course_id,
  curr_sem_code
) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC Procedures_ChooseInstructor
          ${student_id},${instructor_id},${course_id},'${curr_sem_code}'`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getStudentSemCode = async (StudentID) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  getStudentSemCode
          ${StudentID}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const advisorGetHisStudents = async (advisor_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  AdvisorViewHisStudents
          ${advisor_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getSemCode = async (request_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `EXEC  getSemCode
          ${request_id}`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const ExtraCHRequest = async (advisor_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `select * from  dbo.[ExtraCHRequests](${advisor_id})`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const ExtraCourseRequest = async (advisor_id) => {
  try {
    let request = pool.request();
    let exec = await request.query(
      `select * from dbo.[ExtraCourseRequests](${advisor_id})`
    );
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getLatestStudent = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`select* from dbo.getLatestStudent()`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

const getLatestAdvisor = async () => {
  try {
    let request = pool.request();
    let exec = await request.query(`select* from dbo.getLatestAdvisor()`);
    return exec;
  } catch (error) {
    console.log(error);
  }
};

process.on("exit", async () => {
  await pool.close();
});

module.exports = {
  getLatestAdvisor,
  getLatestStudent,
  ExtraCourseRequest,
  ExtraCHRequest,
  getSemCode,
  advisorGetHisStudents,
  getStudents,
  getCourses_Preq,
  getInstructor_Course,
  getPayment_Student,
  getCourse_Slot_Instructor,
  getCourse_Exam,
  getStudent_Course,
  getSem_Course,
  getGradPlan_Advisors,
  getReqs_Advisor,
  getStudents_Advisors_inSpecificMajor,
  getPendingReqsForAdvisor,
  getAvailableSemCourses,
  getStudentSemCode,

  student_Reg,
  advisor_Reg,
  sendingExtraCourseReq,

  all_Advising_Students,
  all_Advisors,
  all_Students_Advisors,
  allPendingReq,

  addSemester,
  addCourse,
  addExam,
  addCourse_in_StudentPlan,
  addStudentMobile,

  link_Instructor_Course_Slot,
  link_Student_Course_Instructor,
  link_Student_Advisor,

  issueInstallments,
  del_Courses_Slots,
  del_Courses_notOffered,
  advisorLogin,
  studentLogin,
  insertGradPlan,
  delCourse_inGradPlan,
  Approve_Reject_CredHours_Request,
  Approve_Reject_Course_Request,
  sendingExtraHoursReq,
  viewGradPlan_Courses,
  studentViewFirstNotPaidInstallment,
  viewCourseSlots_TaughtBy_Instructor,
  regFirstMakeup,
  checkEligibleScndMakeup,
  regScndMakeup,
  viewRequiredCourses,
  viewOptionalCourses,
  viewMissingCourses,
  chooseInstructorForCourse,

  update_Student_Status,
  updateExpecGradDate,
};
