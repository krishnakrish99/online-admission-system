import React, { Component } from 'react'
// import {Button} from "reactstrap";


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
         home(){
            
                window.open("/applicant", "_self");
              
         }
    

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href=" " style={{marginLeft: "10px"}} className="navbar-brand">OnlineAdmissionSystem</a></div>
                    
                    {/* <Button onclick> HOME </Button> */}
                    <div>

                    <button style={{marginLeft: "950px"}} onClick={() => {window.open("/home", "_self");}} className="btn btn-dark">Home</button>
                     <button onClick={() => {window.open("/AboutCourses", "_self");}} className="btn btn-dark">Courses list</button>
                    {/* <button onClick={() => {window.open("/form", "_self");}} className="btn btn-dark">Students Enrolled</button> */}
                    
                    <button className="btn btn-dark" onClick={() => {window.open("/AdminLogin", "_self");}}>LogIn</button>

                  
                        </div>
                    </nav>
                </header> 
            </div>
        )
    } 
}

export default HeaderComponent