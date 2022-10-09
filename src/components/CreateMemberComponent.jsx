import React, { Component } from 'react';
import AdmissionCommiteeMemeberService from '../services/AdmissionCommiteeMemeberService';

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           errors:{},
           member:{},
           id: this.props.match.params.id,
           adminName:'',
           adminContact:'',
           adminId:''
        }

        this.changeadminNameHandler = this.changeadminNameHandler.bind(this);
        this.changeadminContactHandler = this.changeadminContactHandler.bind(this);
        this.changeadminIdHandler = this.changeadminIdHandler.bind(this);
        
        this.saveMember = this.saveMember.bind(this);
    }

    // componentDidMount(){

    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         AdmissionCommiteeMemberService.getMemberById(this.state.id).then( (res) =>{
    //             let member = res.data;
    //             this.setState({adminName: member.adminName,
    //                 adminContact: member.adminContact,
    //                 adminId : member.adminId
    //             });
    //         });
    //     }        
    // }
    handleValidation(){
        let member = this.state.member;
        let errors = {};
        let formIsValid = true;
    //Name
    if(!member["adminName"]){
      formIsValid = false;
      errors["adminName"]="Cannot be empty";
     }
     if (typeof member["adminName"] !== "undefined") {
         if (!member["adminName"].match(/^[a-zA-Z]+$/)) {
           formIsValid = false;
           errors["adminName"] = "Only letters";
         }
    }
    //Admin Contact
    if (!member["adminContact"]) {
        formIsValid = false;
        errors["adminContact"] = "Cannot be empty";
      }
      if (!member["adminId"]) {
          formIsValid = false;
          errors["adminId"] = "Cannot be empty";
        }
     
  
      this.setState({ errors: errors });
      return formIsValid;
    }

    saveMember = (e) => {
        e.preventDefault();
        let member = this.state.member;
        // let member = {adminName: this.state.adminName, adminContact: this.state.adminContact, adminId: this.state.adminId};
        console.log('member => ' + JSON.stringify(member));

        // if(this.state.Id === '_add'){
            if (this.handleValidation()) {
                AdmissionCommiteeMemberService.createMember(member).then(res =>{
                    this.props.history.push('/getallMembers');
            });
        }else {
            alert("Form has errors.");
        }
        // }else{
        //     AdmissionCommiteeMemberService.updateMember(member, this.state.id).then( res => {
        //         this.props.history.push('/Members');
        //     });
        // }
    }
    handleChange(memb, e) {
        let member = this.state.member;
        member[memb] = e.target.value;
        this.setState({ member });
      }

    changeadminNameHandler= (event) => {
         this.setState({adminName: event.target.value});
    }

    changeadminContactHandler= (event) => {
         this.setState({adminContact: event.target.value});
    }

    changeadminIdHandler= (event) => {
         this.setState({adminId: event.target.value});
    }

    cancel(){
        this.props.history.push('/getallMembers');
    }

    getTitle(){
      
        return <h3 className="text-center">Add Member</h3>
    }   


    render() {
        return (
            <div>
                  <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Admin Name: </label>
                                            <input placeholder="Admin Name" name="adminName" className="form-control" 
                                                value={this.state.member["adminName"]} onChange={this.handleChange.bind(this, "adminName")}/>
                                                <span style={{ color: "red" }}>{this.state.errors["adminName"]}</span>

                                        </div>
                                        <div className = "form-group">
                                            <label> Admin Contact: </label>
                                            <input placeholder="Admin Contact" name="adminContact" className="form-control" 
                                                value={this.state.member["adminContact"]} onChange={this.handleChange.bind(this, "adminContact")}/>
                                                <span style={{ color: "red" }}>{this.state.errors["adminContact"]}</span>

                                        </div>
                                        <div className = "form-group">
                                            <label>  Admin Id: </label>
                                            <input placeholder="Admin Id" name="adminId" className="form-control" 
                                                value={this.state.member["adminId"]} onChange={this.handleChange.bind(this, "adminId")}/>
                                                <span style={{ color: "red" }}>{this.state.errors["adminId"]}</span>

                                        </div>

                                        <button className="btn btn-success" onClick={this.saveMember}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateMemberComponent;