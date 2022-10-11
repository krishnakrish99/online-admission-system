import React, { Component } from 'react';
import AdmissionCommiteeMemeberService from '../services/AdmissionCommiteeMemeberService';
import Adminheader from './Adminheader'

class ListAdmissionCommiteeMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            members:[]
        }
        this.addMember = this.addMember.bind(this); 
        this.updateMember = this.updateMember.bind(this);
        this.getallMembers = this.getallMembers.bind(this);
        this.deleteMember=this.deleteMember.bind(this);


    }
    deleteMember(adminId){
        AdmissionCommiteeMemberService.deleteMember(adminId).then(res =>{
         this.setState({member:this.state.members.filter(member=>member.adminId !==adminId)});
        });
    }
    componentDidMount(){
        AdmissionCommiteeMemberService.getMembers().then((response) => {
            this.setState({members: response.data});

        });
    }
    
    addMember(){
        this.props.history.push('/addMember');

    }
    updateMember(adminId){
        this.props.history.push(`/updateMember/${adminId}`);
    }
    getallMembers(){
        this.props.history.push(`/getallMembers`);
    }



    render() {
        return (
            <div>
                <Adminheader/>
                 <h2 className="text-center">AdmissionCommiteeMembers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMember}> Add Member</button>
                 </div>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.getallMembers}>Members</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> adminName</th>
                                    <th> adminContact</th>
                                    <th> adminId</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                      this.state.members.map(
                                        member => 
                                        <tr key = {member.id}>
                                             <td> {member.adminName} </td>   
                                             <td> {member.adminContact}</td>
                                             <td> {member.adminId}</td>
                                             <td>
                                                 <button onClick={ () => this.updateMember(member.adminId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMember(member.adminId)} className="btn btn-danger">Delete</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default ListAdmissionCommiteeMemberComponent;