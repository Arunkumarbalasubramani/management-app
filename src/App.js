import "./styles.scss";
import {
  MainPage,
  Notavailable,
  StudentDetails,
  StudentsPage,
  TeacherDetails,
  TeachersPage,
} from "./components/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/teachers/:teacherName" element={<TeacherDetails />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/:studentName" element={<StudentDetails />} />
          <Route path="*" element={<Notavailable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
