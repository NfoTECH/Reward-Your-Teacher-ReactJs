import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginOptionPage from './pages/LoginOptionPage';
import StudentSignUpPage from './pages/StudentSignUpPage';
import TeacherSignUpPage from './pages/TeacherSignUpPage';
import StudentLoginPage from './pages/StudentLoginPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import ViewTeacherProfilePage from './pages/ViewTeacherProfilePage';
import SendRewardPage from './pages/SendRewardPage';
import TeacherWalletPage from './pages/TeacherWalletPage';
import StudentWalletPage from './pages/StudentWalletPage';
import ListOfSchoolsPage from './pages/ListOfSchoolsPage';
import { AllTeachersInASchool } from './components/AllTeachersInASchool/AllTeachersInASchool';
import EditTeacherProfile from './components/EditProfile/EditTeacherProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element = {<HomePage/>}/>
       <Route path='/login' element={<LoginOptionPage/>}/>
        <Route path='/student/login' element={<StudentLoginPage/>}/>
        <Route path='/teacher/login' element={<TeacherLoginPage/>}/>
        <Route path='/student/signup' element={<StudentSignUpPage/>}/>
        <Route path='/teacher/signup' element={<TeacherSignUpPage/>}/>
        <Route path='/student/viewTeacherProfile' element={<ViewTeacherProfilePage/>}/>
         <Route path='/student/sendReward' element={<SendRewardPage/>}/>
         <Route path='/teacher/dashboard' element={<TeacherWalletPage/>}/>
          <Route path='/student/dashboard' element={<StudentWalletPage/>}/>
          <Route path='/student/schools' element={<ListOfSchoolsPage/>}/>
          <Route path='/student/allteachers' element={<AllTeachersInASchool/>}/>      
           <Route path='/teacher/editprofile' element={<EditTeacherProfile/>}/>          
    </Routes>
    </BrowserRouter>
  
  );
}
export default App;