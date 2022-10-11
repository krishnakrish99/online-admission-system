import React, { Component } from 'react';
import StaffService from '../services/StaffService';
import HeaderComponent from './HeaderComponent';


class AddStaffComponent extends Component {
   constructor(props){
    super(props)

    this.state={
        staffid:this.props.match.params.staffid,
        password:'',
        role:'',
        passwordError:"",
        roleError:""
    }
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveStaff=this.saveStaff.bind(this);

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
        errors.roleError='Name cannot be empty';
    }
    if(isError){
        this.setState({
            ...this.State,
            ...errors
        });
    }
    return isError;
};

   

    saveStaff=(e)=>{
        e.preventDefault(); 
        const err = this.validate();
        if(!err){
        let staff = {password: this.state.password,
                     role: this.state.role};
        console.log('staff => ' + JSON.stringify(staff));
        StaffService.addStaff(staff).then(res=>{
                    this.props.history.push('/');
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
          <HeaderComponent/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">       
                    <div className = "card col-md-6 offset-md-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <div >
                         <h2 className="text-center fst-italic"> Register</h2>
                          <div className = "card-body"></div>
                             <form>
                                 
                                 <div className="form-group"> 
                                    <label> Full Name:</label>
                                    <input  placeholder="Enter Name"
                                     name="role" className="form-control" 
                                     value={this.state.role} 
                                     onChange={this.changeRoleHandler}/>
                                     <div style={{fontsize:12 ,color:"red"}}>
                                     {this.state.roleError}
                                     </div>
                    <br></br>
                                 </div>
                                 <div className="form-group"> 
                                    <label> PASSWORD:</label> 
                                    <input  placeholder="Enter password" 
                                     name="password" 
                                     className="form-control" 
                                     value={this.state.password} 
                                     onChange={this.changePasswordHandler}/>
                                     <div style={{fontsize:12 ,color:"red"}}>
                                        {this.state.passwordError} </div>
                                        <br/>
                                    
                                     
                                 </div>
                                 
                                 {/* <button style={{marginLeft: "10px"}} className="btn btn-dark"  onClick={() => {window.open("/userLogin", "_self")}}>back</button>
          */}
                             </form>
                             <button className="btn btn-dark" onClick={this.saveStaff}>Submit</button>
                             </div>
                             </div>
                          </div>
                    </div>
                    </div>
                
                
        )
    }
}

export default AddStaffComponent






// constructor(props){
//     super(props)

//     this.state={

//     }

//    }

//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }