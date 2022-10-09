import axios from 'axios';

const APPLICANT_API_BASE_URL="http://localhost:8082/applicants" ;
const APPLICANT_API_addApplicant="http://localhost:8082/addApplicant";
const APPLICANT_API_deleteApplicant="http://localhost:8082/deleteApplicant";
const APPLICANT_API_viewApplicantByApplicantId ="http://localhost:8082/viewApplicantByApplicantId";
const APPLICANT_API_updateApplicantStatus="http://localhost:8082/updateApplicantStatus";
const APPLICANT_API_findAllByStatus="http://localhost:8082/viewApplicantByStatus";
class applicantService{
    getApplicants(){
        return axios.get( APPLICANT_API_BASE_URL);
    }

    getApplicantByStatus(status){
        return axios.get( APPLICANT_API_findAllByStatus + '/' + status );
    }

 addApplicant(applicant){
     return axios.post(APPLICANT_API_addApplicant, applicant);
 }

 deleteApplicant(applicantId){
    return axios.delete(APPLICANT_API_deleteApplicant + '/' + applicantId);
 }

 getApplicantById(applicantId){
    return axios.get(APPLICANT_API_viewApplicantByApplicantId + '/' + applicantId);
 }

 updateApplicantStatus(applicantId,status){
    console.log(applicantId,status)
    return axios.put(APPLICANT_API_updateApplicantStatus + '/' + applicantId + '/' + status);
 }
}

export default new applicantService(); 