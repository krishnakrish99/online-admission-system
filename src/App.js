import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListApplicantComponent from "./components/ListApplicantComponent";
import form from "./components/form";
import Home from './components/HomeComponent';
import ListApplyForAdmissionAplicantComponent from "./components/ListApplyForAdmissionAplicantComponent";
import AdminLogin from "./components/AdminLogin";
import StaffLogin from './components/StaffLogin';
import AdmissionCommiteeLogin from "./components/AdmissionCommiteeLogin";
import StaffProfile from './components/StaffProfile';
import AdmissionCommiteeProfile from './components/AdmissionCommiteeProfile';
import AboutCourses from './components/AboutCourses';
import AdminProfile from './components/AdminProfile';
import ListStaffComponent from './components/ListStaffComponent';
import AddStaffComponent from './components/AddStaffComponent';
import UpdateStaffComponent from './components/UpdateStaffComponent';
import CreateMemberComponent from './components/CreateMemberComponent';
import UpdateMemberComponent from'./components/UpdateMemberComponent';
import ListAdmissionCommiteeMemberComponent from "./components/ListAdmissionCommiteeMemberComponent";
import ListCourseComponent from './components/ListCourseComponent';
import CreateCourseComponent from './components/CreateCourseComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';
import ViewCourseComponent from './components/ViewCourseComponent';


 
function App() {
  return (
     <div>
         <Router>
                     <Switch>
                     <Route path = "/AdminLogin" component = {AdminLogin}></Route>
                     <Route path = "/StaffLogin" component = {StaffLogin}></Route>
                     <Route path = "/AdmissionCommiteeLogin" component = {AdmissionCommiteeLogin}></Route>           
                     <Route path = "/student" component = {ListApplicantComponent}></Route> 
                     <Route path = "/" exact component = {Home}></Route>
                     <Route path = "/form" component = {form}></Route>
                     <Route path = "/StaffProfile" component = {StaffProfile}></Route>
                     <Route path = "/AdmissionCommiteeProfile" component = {AdmissionCommiteeProfile}></Route>
                     <Route path = "/home" component = {Home}></Route>
                     <Route path = "/applicant" component = {ListApplyForAdmissionAplicantComponent}></Route>
                     <Route path = "/AboutCourses" component = {AboutCourses}></Route>
                     <Route path = "/AdminProfile" component = {AdminProfile}></Route>   
                     <Route path = "/staffs" component = {ListStaffComponent}></Route>
                     <Route path = "/addstaff" component = {AddStaffComponent}></Route>
                     <Route path = "/update-staff/:staffid" component = {UpdateStaffComponent}></Route>
                     <Route path = "/getallMembers" component = {ListAdmissionCommiteeMemberComponent}></Route>
                     <Route path = "/addMember" component = {CreateMemberComponent}></Route>
                     <Route path = "/updateMember/:id" component = {UpdateMemberComponent}></Route>
                     <Route path = "/viewAllCourses" component = {ListCourseComponent}></Route>
                     <Route path = "/addCourse" component = {CreateCourseComponent}></Route>
                     <Route path = "/updateCourse/:id" component = {UpdateCourseComponent}></Route>
                     <Route path = "/findByCourseId/:id" component = {ViewCourseComponent}></Route>
                   
                     </Switch>
                 
         </Router>
      </div>
     
  );
}
export default App;