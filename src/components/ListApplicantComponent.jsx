import React, { Component } from 'react'
import applicantService from '../services/applicantService'
import AdmissionCommiteeheader from './AdmissionCommiteeheader'

class ListApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                applicants: []
         }
        // this.addApplicant = this.addApplicant.bind(this);
        //  this.editApplicant = this.editApplicant.bind(this);
        this.deleteApplicant = this.deleteApplicant.bind(this);
    }

    deleteApplicant(applicantId){
        applicantService.deleteApplicant(applicantId).then( res => {
            this.setState({applicants: this.state.applicants.filter(applicant => applicant.applicantId !==applicantId)});
        });
    }
    // viewApplicant(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(id){
    //     this.props.history.push(`/add-employee/${id}`);
    // }

    // componentDidMount(){
    //     applicantService.getApplicants().then((res) => {
    //         this.setState({ applicants: res.data});
    //     });
    // }
    componentDidMount(){
        applicantService.getApplicantByStatus("CONFIRMED").then((res) => {
            this.setState({ applicants: res.data});
        });
    }

    // addApplicant(){
    //     this.props.history.push('/add-applicant/_add');
    // }

    render() {
        return (
            <div>
                
                <AdmissionCommiteeheader />
                 <h2 className="text-center">Applicants List</h2>
                 {/* <div className = "row"> */}
                    {/* <button className="btn btn-primary" onClick={this.addApplicant}> Add Applicant</button> */}
                 {/* </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Applicant Id</th>
                                    <th> Student_Name</th>
                                    <th> ContactNumber</th>
                                    <th> Student_Degree</th>
                                    <th> Student_graduation_percent</th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.applicants.map(
                                        applicants => 
                                        <tr key = {applicants.applicant_id}>
                                            <td> {applicants.applicantId} </td>
                                             <td> {applicants.studentname} </td>   
                                             <td> {applicants.contactNumber}</td>
                                             <td> {applicants.studentDegree}</td>
                                             <td> {applicants.studentGraduationPercent}</td>
                                             
                                             <td>
                                                 {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteApplicant(applicants.applicantId)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(applicant.applicantId)} className="btn btn-info">View </button> */}
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

export default ListApplicantComponent