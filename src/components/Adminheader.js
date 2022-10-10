import React, { Component } from 'react'
// import {Button} from "reactstrap";


class Adminheader extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href=" " style={{marginLeft: "10px"}} className="navbar-brand">Admin DashBoard</a></div>
                    
                    {/* <Button onclick> HOME </Button> */}
                    <div>
                    <button style={{marginLeft: "500px"}} onClick={ () => this.home()} className="btn btn-dark">Profile</button>
                     <button className="btn btn-dark" onClick={() => {window.open("/viewAllCourses", "_self");}}>Courses</button>
                    <button onClick={() => {window.open("/applicant", "_self");}} className="btn btn-dark">Applicant</button>
                    <button onClick={() => {window.open("/student", "_self");}} className="btn btn-dark">Students</button>
                    <button onClick={() => {localStorage.removeItem('AdminId'); localStorage.removeItem('Adminpassword'); window.open("/home", "_self");}} className="btn btn-dark">Logout</button>
                    </div>
                    </nav>
                </header> 
            </div>
        )
    }   
}

export default Adminheader