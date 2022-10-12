import React, { Component } from 'react'
import applicantService from '../services/applicantService'
// import AdmissionCommiteeheader from './AdmissionCommiteeheader'
import Adminheader from './Adminheader'

class ListApplyForAdmissionAplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                applicant: []
         }
        //  const status="CONFIRMED";
   
        // this.addApplicant = this.addApplicant.bind(this);
        this.updateApplicantStatus = this.updateApplicantStatus.bind(this);
        this.deleteApplicant = this.deleteApplicant.bind(this);
    }

    deleteApplicant(applicantId){
        applicantService.deleteApplicant(applicantId).then( res => {
            this.setState({applicant: this.state.applicant.filter(applicant => applicant.applicantId !==applicantId)});
        });
    }
    updateApplicantStatus(applicantId,status){
        applicantService.updateApplicantStatus(applicantId,status).then( res => {
            this.setState({applicant: this.state.applicant.filter(applicant => applicant.applicantId !==applicantId)});
        });
    }
    
    componentDidMount(){
        applicantService.getApplicantByStatus("APPLIED").then((res) => {
            this.setState({ applicant: res.data});
        });
    }


    render() {
        return (
            <div>
                
                <Adminheader />
                 <h2 className="text-center">Addmission Applied List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead className='table-dark'>
                                <tr>
                                    <th> Applicant Id</th>
                                    <th> Student_Name</th>
                                    <th> ContactNumber</th>
                                    <th> Student_Degree</th>
                                    <th> Student_graduation_percent</th>
                                    <th>Status</th>
                                    <th>Course</th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody className='table-light'>
                                {
                                    this.state.applicant.map(
                                        applicant => 
                                        <tr key = {applicant.applicant_id}>
                                            <td align="right"> {applicant.applicantId} </td>
                                             <td> {applicant.studentname} </td>   
                                             <td> {applicant.contactNumber}</td>
                                             <td> {applicant.studentDegree}</td>
                                             <td> {applicant.studentGraduationPercent}</td>
                                             <td> {applicant.status}</td>
                                             <td> {applicant.admission.course}</td>

                                             <td>

                                                 {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteApplicant(applicant.applicantId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.updateApplicantStatus(applicant.applicantId,"CONFIRMED")} className="btn btn-info">Confirm</button>
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

export default ListApplyForAdmissionAplicantComponent