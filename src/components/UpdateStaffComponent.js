import React, { Component } from 'react';
import StaffService from '../services/StaffService';

class UpdateStaffComponent extends Component {
    
    constructor(props){
        super(props)
    
        this.state={
            staffid:this.props.match.params.staffid,
            password:'',
            role:'',
            passwordError:'',
            roleError:''
        }
            this.changePasswordHandler=this.changePasswordHandler.bind(this);
            this.changeRoleHandler=this.changeRoleHandler.bind(this);
            this.updateStaff=this.updateStaff.bind(this);
    
       }
    componentDidMount(){
        StaffService.getStaffById(this.state.staffid).then ((res)=>{
             let staff =res.data;
             this.setState({password:staff.password,
            role:staff.role
        });
                
        });

    }
    validate=()=>{
        let isError=false;
        const errors={};
    
        if(this.state.password.length <6){
            isError=true;
            errors.passwordError='Password must contain 6 characters';
        }
        if(!this.state.role){
            isError=true;
            errors.roleError='Role cannot be empty';
        }
        if(isError){
            this.setState({
                ...this.State,
                ...errors
            });
        }
        return isError;
    };

        updateStaff=(e)=>{
            e.preventDefault();
            const err = this.validate();
            if(!err){
            let staff = {password: this.state.password, role: this.state.role};
            console.log('staff => ' + JSON.stringify(staff));
        StaffService.updateStaff(staff,this.state.staffid).then(res =>{
            this.props.history.push('/staffs');
        });
    }     
        }
        changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
       }
        changeRoleHandler=(event)=>{
        this.setState({role:event.target.value});
      } 
        
       cancel(){
        this.props.history.push('/staffs');
    }
       
        render() {
            return (
                <div>
                      <br></br>
                    <div className="container">
                        <div className="row">
                        <div className = "card col-md-6 offset-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                        <div class="bg-info p-2 text-dark bg-opacity-50">
                        <h2 className="text-center">UPDATE STAFF DETAILS</h2>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                     <label> PASSWORD:</label> 
                                     <input  placeholder="PASSWORD" 
                                             name="password" 
                                             className="form-control" 
                                             value={this.state.password} 
                                             onChange={this.changePasswordHandler}/>
                                             <div style={{fontsize:12 ,color:"red"}}>
                                             {this.state.passwordError} </div>
                                     </div>
                                     <div className="form-group"> 
                                     <label> ROLE:</label>
                                     <input  placeholder="ROLE" 
                                             name="role" 
                                             className="form-control" 
                                             value={this.state.role} 
                                             onChange={this.changeRoleHandler}/>
                                             <div style={{fontsize:12 ,color:"red"}}>
                                             {this.state.roleError}
                                             </div>
                                               
                                     </div>
                                              <br></br>
                                     <button className="btn btn-success" onClick={this.updateStaff}> UPDATE</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
             
                                 </form>
                                 </div>
                              </div>
                              </div>
                        </div>
                        </div>
                    </div>
                    
            )
        }
}

export default UpdateStaffComponent;