import React, { Component } from 'react'
// import {Button} from "reactstrap";


class AdmissionCommiteeheader extends Component {
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
                    <div><a href=" " style={{marginLeft: "10px"}} className="navbar-brand">Admission Commitee DashBoard</a></div>
                    
                    {/* <Button onclick> HOME </Button> */}
                    <div>

                    <button style={{marginLeft: "400px"}} onClick={() => {window.open("/AdmissionCommiteeProfile", "_self");}} className="btn btn-dark">Profile</button>
                     <button className="btn btn-dark" onClick={() => {window.open("/student", "_self");}}>University Student list</button>
                     <button className="btn btn-dark" onClick={() => { window.open("/applicant", "_self");}}>Admission Applicant list</button>
                     <button className="btn btn-dark" onClick={() => {localStorage.removeItem('AdmissionCommiteeId'); localStorage.removeItem('AdmissionCommiteepassword'); window.open("/home", "_self");}}>logout</button>
                  
                        </div>
                    </nav>
                </header> 
            </div>
        )
    } 
}

export default AdmissionCommiteeheader