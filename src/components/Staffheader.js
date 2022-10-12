import React, { Component } from 'react'
// import {Button} from "reactstrap";


class Staffheader extends Component {
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
                    <div><a href=" " style={{marginLeft: "10px"}} className="navbar-brand">User DashBoard</a></div>
                    
                    {/* <Button onclick> HOME </Button> */}
                    <div>

                    <button style={{marginLeft: "800px"}} onClick={() => {window.open("/UserProfile", "_self");}} className="btn btn-dark">Profile</button>
                    <button  className="btn btn-dark" onClick={() => {window.open("/form", "_self");}}>Admission form</button>
                    <button  className="btn btn-dark" onClick={() => {localStorage.removeItem('StaffId'); localStorage.removeItem('Staffpassword'); window.open("/home", "_self");}}>Logout</button>       
                        </div>
                    </nav>
                </header> 
            </div>
        )
    } 
}

export default Staffheader