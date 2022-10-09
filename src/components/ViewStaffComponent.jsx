import React, { Component } from 'react';
import StaffService from '../services/StaffService';


class ViewStaffComponent extends Component {


    constructor(props){
        super(props)
    
         this.state={
            staffid:this.props.match.params.staffid,
            staff:{}
    
       }
    }

    componentDidMount(){
             StaffService.getStaffById(this.state.staffid).then(res=>{
                this.setState({staff:res.data});
             })
    }

    back(){
        this.props.history.push('/staffs');
      }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="bg-warning p-2 text-dark bg-opacity-25">
                    <h3 className = "fst-italic"> View Staff Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <span className="w-25 d-inline p-2 text-warning bg-dark">Staff Password</span>
                            <div>
                                 { this.state.staff.password}</div>
                           </div>
                        <div className = "row">  
                            <span className="w-25 d-inline p-2 text-warning bg-dark">Role</span>
                            <div> 
                                { this.state.staff.role}</div>
                        </div>
                        <button className="btn btn-info"onClick={this.back.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewStaffComponent
 
    


   
    {/* <label> STAFF ROLE: </label> */}

     {/* <label> STAFF PASSWORD: </label> */}