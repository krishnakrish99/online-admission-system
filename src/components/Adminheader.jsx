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
                     <button className="btn btn-dark" onClick={() => {window.open("/getallMembers", "_self");}}>Admission Commitee Member</button>
                    <button onClick={() => {window.open("/staffs", "_self");}} className="btn btn-dark">Staff Member</button>
                    <button onClick={() => {localStorage.removeItem('AdminId'); localStorage.removeItem('Adminpassword'); window.open("/home", "_self");}} className="btn btn-dark">Logout</button>
                    </div>
                    </nav>
                </header> 
            </div>
        )
    }   
}

export default Adminheader