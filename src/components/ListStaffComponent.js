import React, { Component } from 'react'
import StaffService from '../services/StaffService'
import Adminheader from './Adminheader'

class ListStaffComponent extends Component {
constructor(props){
    super(props)
    this.state={
        staffs:[]

    }
    this.addStaff=this.addStaff.bind(this);
    this.editStaff=this.editStaff.bind(this);
    this.deleteStaff=this.deleteStaff.bind(this);
}
deleteStaff(staffid){
     StaffService.deleteStaff(staffid).then(res =>{
      this.setState({staffs:this.state.staffs.filter(staff=>staff.staffid !==staffid)});
     });

}
editStaff(staffid){
   this.props.history.push(`/update-staff/${staffid}`);
}

viewStaff(staffid){
    this.props.history.push(`/view-staff/${staffid}`);
}

componentDidMount(){
    StaffService.getStaffs().then((res)=>{
        this.setState({staffs:res.data});

    });
}
addStaff(){
    this.props.history.push(`/addstaff`);
}

    render() {
        return (
            
            <div>      
                  {/* <button  onClick={() => {window.open("/AdminProfile", "_self")}}  className="btn btn-dark">Back</button> */}
                  <Adminheader />                            
                
                 <h2 className="text-center fst-italic text-decoration-underline">Users List</h2>
                  {/* <div className="row">
                  <button className="btn btn-warning w-25" onClick={this.addStaff}> Add Staff</button>
                  </div>
                  <br></br> */}
                 <div className = "row">
                 <table className = "table table-striped table-bordered-shadow">
                    <thead className="table-dark">
                        <tr> 
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User PASSWORD</th>
                            
                            <th className="text-center">ToDo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.staffs.map(
                             staff=>
                         <tr key={staff.staffid}>
                         <td align="right"><strong>{staff.staffid}</strong></td>
                         <td className="table-primary"><strong>{staff.role}</strong></td>
                         <td className="table-warning"><strong>{staff.password}</strong></td>
                         
                         <td>
                    <button onClick={ () => this.editStaff(staff.staffid)} className="btn btn-info w-50"><strong>Update</strong></button>
                    <button style={{marginLeft:"10px"}} onClick={ () => this.deleteStaff(staff.staffid)} className=" w-25 btn btn-danger"><strong>Delete</strong></button>
                        </td>
                        </tr>
                                   
                                //    {/* <button style={{marginLeft:"10px"}} onClick={ () => this.viewStaff(staff.staffid)} className="btn btn-success">View</button> */}

                                    
                                
                            )
                        }
                    </tbody>
                 </table>
                 </div>
            </div>
           
        )
    }
}
export default ListStaffComponent