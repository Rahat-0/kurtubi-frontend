import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserProfile from "./components/userProfile/UserProfile";
import Navber from "./components/navber/Navber";
import Results from "./components/results/Results";
import StudentList from "./components/students/StudentList";
import TeachersList from "./components/teachers/TeachersList";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/home/Home";
import { Login } from "./components/Login";
import ProtectedStudent from "./components/students/ProtectedStudent";

function App() {

  return (
    <BrowserRouter >
      <Navber />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      
      <Route path='/auth' element={<ProtectedStudent />} >
        <Route path='user' element={<UserProfile />} />
      </Route>

      <Route path='/admin' element={<Admin />} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='studentlist' element={<StudentList />} />
        <Route path='teacherlist' element={<TeachersList />} />
        <Route path='results' element={<Results />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
