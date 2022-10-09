import axios from 'axios';

const APPLICANT_API_Staff="http://localhost:8082/loginStaff" ;
const APPLICANT_API_Applicant="http://localhost:8082/loginApplicant" ;
const APPLICANT_API_AdmissionCommitee="http://localhost:8082/loginCommitee" ;


class loginService{

    loginStaff(logdetails){
     return axios.post(APPLICANT_API_Staff, logdetails);
 }
 loginApplicant(logdetails){
    return axios.post(APPLICANT_API_Applicant, logdetails);
}
loginCommitee(logdetails){
    return axios.post(APPLICANT_API_AdmissionCommitee, logdetails);
}

}

export default new loginService(); 