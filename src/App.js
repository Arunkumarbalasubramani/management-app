import "./styles.scss";
import {
  AddPage,
  MainPage,
  Notavailable,
  StudentDetails,
  StudentsPage,
  TeacherDetails,
  TeachersPage,
  EditPage,
  DeletePage,
  Addstudent,
  EditStudent,
  DeleteStudents,
} from "./components/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/teachers/:teacherId" element={<TeacherDetails />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/teachers/add" element={<AddPage />} />
          <Route path="/students/add" element={<Addstudent />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />

          <Route path="/teachers/edit/:teacherId" element={<EditPage />} />
          <Route path="/students/edit/:studentId" element={<EditStudent />} />
          <Route
            path="/students/delete/:studentId"
            element={<DeleteStudents />}
          />
          <Route path="/teachers/delete/:teacherId" element={<DeletePage />} />
          <Route path="*" element={<Notavailable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
