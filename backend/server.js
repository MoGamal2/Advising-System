//Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It helps manage servers and routes.

//cors--> Croos-OriginResource Sharing: security feature implemented by web browsers to restrict web pages from making requests to a different domain/port than the one that served the web page.

const morgan = require("morgan");
const dbOperation = require("./db-files/dbOperation");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const API_PORT = process.env.PORT || 5000;
const app = express();
const jsonParser = bodyParser.json();

app.use(express.json());

app.use(morgan("dev"));

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/getCourses_Preq", jsonParser, async (req, res) => {
  const result = await dbOperation.getCourses_Preq();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getInstructor_Course", jsonParser, async (req, res) => {
  const result = await dbOperation.getInstructor_Course();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getPayment_Student", jsonParser, async (req, res) => {
  const result = await dbOperation.getPayment_Student();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getCourse_Slot_Instructor", jsonParser, async (req, res) => {
  const result = await dbOperation.getCourse_Slot_Instructor();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getCourse_Exam", jsonParser, async (req, res) => {
  const result = await dbOperation.getCourse_Exam();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getStudent_Course", jsonParser, async (req, res) => {
  const result = await dbOperation.getStudent_Course();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getSem_Course", jsonParser, async (req, res) => {
  const result = await dbOperation.getSem_Course();
  res.send(JSON.stringify(result.recordset));
});

app.get("/getGradPlan_Advisors", jsonParser, async (req, res) => {
  const result = await dbOperation.getGradPlan_Advisors();
  res.send(JSON.stringify(result.recordset));
});

app.post("/student_Reg", jsonParser, async (req, res) => {
  const tmp = await dbOperation.student_Reg(
    req.body.f_name,
    req.body.l_name,
    req.body.password,
    req.body.faculty,
    req.body.email,
    req.body.major,
    req.body.Semester
  );
  return res.send(tmp.recordset);
});

app.post("/advisor_Reg", jsonParser, async (req, res) => {
  const tmp = await dbOperation.advisor_Reg(
    req.body.advisor_name,
    req.body.password,
    req.body.email,
    req.body.office
  );
  return res.send(tmp.recordset);
});

app.get("/all_Advising_Students", jsonParser, async (req, res) => {
  const result = await dbOperation.all_Advising_Students();
  res.send(JSON.stringify(result.recordset));
});

app.get("/all_Advisors", jsonParser, async (req, res) => {
  const result = await dbOperation.all_Advisors();
  res.send(JSON.stringify(result.recordset));
});

app.get("/all_Students_Advisors", jsonParser, async (req, res) => {
  const result = await dbOperation.all_Students_Advisors();
  res.send(JSON.stringify(result.recordset));
});

app.post("/addSemester", jsonParser, async (req, res) => {
  const tmp = await dbOperation.addSemester(
    req.body.start_date,
    req.body.end_date,
    req.body.sem_code
  );
  return res.send(tmp.recordset);
});

app.post("/addCourse", jsonParser, async (req, res) => {
  const tmp = await dbOperation.addCourse(
    req.body.major,
    req.body.semester,
    req.body.credit_hours,
    req.body.course_name,
    req.body.offered
  );
  res.send(tmp.recordset);
});

app.post("/link_Instructor_Course_Slot", jsonParser, async (req, res) => {
  const tmp = await dbOperation.link_Instructor_Course_Slot(
    req.body.InstructorId,
    req.body.courseId,
    req.body.slotID
  );
  return res.send(tmp.recordset);
});

app.post("/link_Student_Course_Instructor", jsonParser, async (req, res) => {
  const tmp = await dbOperation.link_Student_Course_Instructor(
    req.body.course_id,
    req.body.InstructorId,
    req.body.student_id,
    req.body.sem_code
  );
  return res.send(tmp.recordset);
});

app.post("/link_Student_Advisor", jsonParser, async (req, res) => {
  const tmp = await dbOperation.link_Student_Advisor(
    req.body.student_id,
    req.body.advisor_id
  );
  return res.send(tmp.recordset);
});

app.post("/addExam", jsonParser, async (req, res) => {
  const tmp = await dbOperation.addExam(
    req.body.type,
    req.body.date,
    req.body.course_id
  );
  return res.send(tmp.recordset);
});

app.post("/issueInstallments", jsonParser, async (req, res) => {
  const tmp = await dbOperation.issueInstallments(req.body.payment_id);
  return res.send(tmp.recordset);
});

app.post("/del_Courses_Slots", jsonParser, async (req, res) => {
  const tmp = await dbOperation.del_Courses_Slots(req.body.course_id);
  return res.send(tmp.recordset);
});

app.post("/update_Student_Status", jsonParser, async (req, res) => {
  const tmp = await dbOperation.update_Student_Status(req.body.student_id);
  return res.send(tmp.recordset);
});

app.get("/allPendingReq", jsonParser, async (req, res) => {
  const result = await dbOperation.allPendingReq();
  res.send(JSON.stringify(result.recordset));
});

app.post("/del_Courses_notOffered", jsonParser, async (req, res) => {
  const tmp = await dbOperation.del_Courses_notOffered(req.body.curr_sem);
  return res.send(tmp.recordset);
});

app.post("/advisorLogin", jsonParser, async (req, res) => {
  const tmp = await dbOperation.advisorLogin(req.body.id, req.body.password);
  return res.send(tmp.recordset);
});

app.post("/insertGradPlan", jsonParser, async (req, res) => {
  const tmp = await dbOperation.insertGradPlan(
    req.body.Semester_code,
    req.body.expected_graduation_date,
    req.body.sem_credit_hours,
    req.body.advisor_id,
    req.body.student_id
  );
  return res.send(tmp.recordset);
});

app.post("/addCourse_in_StudentPlan", jsonParser, async (req, res) => {
  const tmp = await dbOperation.addCourse_in_StudentPlan(
    req.body.student_id,
    req.body.Semester_code,
    req.body.course_name
  );
  return res.send(tmp.recordset);
});

app.post("/updateExpecGradDate", jsonParser, async (req, res) => {
  const tmp = await dbOperation.updateExpecGradDate(
    req.body.expected_grad_date,
    req.body.studentID
  );
  return res.send(tmp.recordset);
});

app.post("/delCourse_inGradPlan", jsonParser, async (req, res) => {
  const tmp = await dbOperation.delCourse_inGradPlan(
    req.body.studentID,
    req.body.semester_code,
    req.body.courseID
  );
  return res.send(tmp.recordset);
});

app.post("/getReqs_Advisor", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getReqs_Advisor(req.body.advisor_id);
  return res.send(tmp.recordset);
});

app.post("/Approve_Reject_CredHours_Request", jsonParser, async (req, res) => {
  const tmp = await dbOperation.Approve_Reject_CredHours_Request(
    req.body.requestID,
    req.body.curr_sem
  );
  return res.send(tmp.recordset);
});

app.post(
  "/getStudents_Advisors_inSpecificMajor",
  jsonParser,
  async (req, res) => {
    const tmp = await dbOperation.getStudents_Advisors_inSpecificMajor(
      req.body.advisorID,
      req.body.major
    );
    return res.send(tmp.recordset);
  }
);

app.post("/Approve_Reject_Course_Request", jsonParser, async (req, res) => {
  const tmp = await dbOperation.Approve_Reject_Course_Request(
    req.body.requestID,
    req.body.curr_sem_code
  );
  return res.send(tmp.recordset);
});

app.post("/getPendingReqsForAdvisor", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getPendingReqsForAdvisor(req.body.advisorID);
  return res.send(tmp.recordset);
});

app.post("/studentLogin", jsonParser, async (req, res) => {
  const tmp = await dbOperation.studentLogin(
    req.body.student_id,
    req.body.password
  );
  return res.send(tmp.recordset);
});

app.post("/addStudentMobile", jsonParser, async (req, res) => {
  const tmp = await dbOperation.addStudentMobile(
    req.body.studentID,
    req.body.mobile_num
  );
  return res.send(tmp.recordset);
});

app.post("/getAvailableSemCourses", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getAvailableSemCourses(req.body.sem_code);
  console.log(req.body.sem_code);
  return res.send(tmp.recordset);
});

app.post("/getCoursesInCurrentSem", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getCoursesInCurrentSem(
    req.body.studentID,
    req.body.courseID,
    req.body.type,
    req.body.comment
  );
  return res.send(tmp.recordset);
});

app.post("/sendingExtraHoursReq", jsonParser, async (req, res) => {
  const tmp = await dbOperation.sendingExtraHoursReq(
    req.body.studentID,
    req.body.credit_hours,
    req.body.type,
    req.body.comment
  );
  return res.send(tmp.recordset);
});

app.post("/sendingExtraCourseReq", jsonParser, async (req, res) => {
  const tmp = await dbOperation.sendingExtraCourseReq(
    req.body.studentID,
    req.body.courseID,
    req.body.type,
    req.body.comment
  );
  return res.send(tmp.recordset);
});

app.post("/viewGradPlan_Courses", jsonParser, async (req, res) => {
  const tmp = await dbOperation.viewGradPlan_Courses(req.body.student_id);
  return res.send(tmp.recordset);
});

app.post(
  "/studentViewFirstNotPaidInstallment",
  jsonParser,
  async (req, res) => {
    const tmp = await dbOperation.studentViewFirstNotPaidInstallment(
      req.body.student_id
    );
    return res.send(tmp.recordset);
  }
);

app.post(
  "/viewCourseSlots_TaughtBy_Instructor",
  jsonParser,
  async (req, res) => {
    const tmp = await dbOperation.viewCourseSlots_TaughtBy_Instructor(
      req.body.courseID,
      req.body.instructorID
    );
    return res.send(tmp.recordset);
  }
);

app.post("/regFirstMakeup", jsonParser, async (req, res) => {
  const tmp = await dbOperation.regFirstMakeup(
    req.body.StudentID,
    req.body.courseID,
    req.body.studentCurrentsemester
  );
  return res.send(tmp.recordset);
});

app.post("/checkEligibleScndMakeup", jsonParser, async (req, res) => {
  const tmp = await dbOperation.checkEligibleScndMakeup(
    req.body.courseID,
    req.body.studentID
  );
  return res.send(tmp.recordset);
});

app.post("/regScndMakeup", jsonParser, async (req, res) => {
  const tmp = await dbOperation.regScndMakeup(
    req.body.StudentID,
    req.body.courseID,
    req.body.studentCurrentsemester
  );
  return res.send(tmp.recordset);
});

app.post("/viewRequiredCourses", jsonParser, async (req, res) => {
  const tmp = await dbOperation.viewRequiredCourses(
    req.body.StudentID,
    req.body.studentCurrentsemester_code
  );
  return res.send(tmp.recordset);
});

app.post("/viewOptionalCourses", jsonParser, async (req, res) => {
  const tmp = await dbOperation.viewOptionalCourses(
    req.body.StudentID,
    req.body.studentCurrentsemester_code
  );
  return res.send(tmp.recordset);
});

app.post("/viewMissingCourses", jsonParser, async (req, res) => {
  const tmp = await dbOperation.viewMissingCourses(req.body.StudentID);
  return res.send(tmp.recordset);
});

app.post("/chooseInstructorForCourse", jsonParser, async (req, res) => {
  const tmp = await dbOperation.chooseInstructorForCourse(
    req.body.student_id,
    req.body.instructor_id,
    req.body.course_id,
    req.body.curr_sem_code
  );
  return res.send(tmp.recordset);
});

app.post("/getStudentSemCode", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getStudentSemCode(req.body.StudentID);
  return res.send(tmp.recordset);
});

app.post("/advisorGetHisStudents", jsonParser, async (req, res) => {
  const tmp = await dbOperation.advisorGetHisStudents(req.body.advisor_id);
  return res.send(tmp.recordset);
});

app.post("/getSemCode", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getSemCode(req.body.request_id);
  return res.send(tmp.recordset);
});

app.post("/ExtraCourseRequest", jsonParser, async (req, res) => {
  const tmp = await dbOperation.ExtraCourseRequest(req.body.advisor_id);
  return res.send(tmp.recordset);
});

app.post("/ExtraCHRequest", jsonParser, async (req, res) => {
  const tmp = await dbOperation.ExtraCHRequest(req.body.advisor_id);
  return res.send(tmp.recordset);
});

app.get("/getLatestStudent", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getLatestStudent();
  return res.send(tmp.recordset);
});

app.get("/getLatestAdvisor", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getLatestAdvisor();
  return res.send(tmp.recordset);
});

app.get("/getStudents", jsonParser, async (req, res) => {
  const tmp = await dbOperation.getStudents();
  return res.send(tmp.recordset);
});

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
