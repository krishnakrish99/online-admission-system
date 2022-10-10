import React, { Component } from 'react';
import AdmissionCommiteeMemeberService from '../services/AdmissionCommiteeMemeberService';

class UpdateMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           id: this.props.match.params.id,
           adminName:'',
           adminContact:'',
           adminId:''
            
        }
        this.changeadminNameHandler = this.changeadminNameHandler.bind(this);
        this.changeadminContactHandler = this.changeadminContactHandler.bind(this);
        this.changeadminIdHandler = this.changeadminIdHandler.bind(this);
        
        this.updateMember = this.updateMember.bind(this);
    }

    
    updateMember = (e) => {
        e.preventDefault();
        let member = {adminName: this.state.adminName, adminContact: this.state.adminContact, adminId: this.state.adminId};
        console.log('member => ' + JSON.stringify(member));
        console.log( 'id =>' + JSON.stringify(this.state.id));

              
        AdmissionCommiteeMemberService.updateMember(member,this.state.id,).then(res =>{
            this.props.history.push('/getallMembers');
        
            });
       
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
        return <h3 className="text-center">Update Member</h3>
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
                                            <label> Admin Name: </label>
                                            <input placeholder="Admin Name" name="adminName" className="form-control" 
                                                value={this.state.adminName} onChange={this.changeadminNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Admin Contact: </label>
                                            <input placeholder="Admin Contact" name="adminContact" className="form-control" 
                                                value={this.state.adminContact} onChange={this.changeadminContactHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Admin Id: </label>
                                            <input placeholder="Admin Id" name="adminId" className="form-control" 
                                                value={this.state.adminId} onChange={this.changeadminIdHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updateMember}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
   
                   </div>
            </div>
        );
    }
   }
   

export default UpdateMemberComponent;