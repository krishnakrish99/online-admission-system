import axios from 'axios';
const ADMISSIONCOMMITEEMEMBER_API_BASE_URL = "http://localhost:8082/getallMembers";
const ADMISSIONCOMMITEEMEMBER_API_CREATEMEMBER_URL = "http://localhost:8082/createMember";
const ADMISSIONCOMMITEEMEMBER_API_UPDATEMEMBER_URL = "http://localhost:8082/updateMember";
const ADMISSIONCOMMITEEMEMBER_API_DELETEMEMBER_URL = "http://localhost:8082/deleteMember";
class AdmissionCommiteeMemberService {
    getMembers(){
        return axios.get(ADMISSIONCOMMITEEMEMBER_API_BASE_URL);
    }
    createMember(member){
        return axios.post(ADMISSIONCOMMITEEMEMBER_API_CREATEMEMBER_URL, member); 
    }

    updateMember(member, adminId){
        return axios.put(ADMISSIONCOMMITEEMEMBER_API_UPDATEMEMBER_URL + '/' + adminId, member);
    }

    deleteMember(adminId){
        return axios.put(ADMISSIONCOMMITEEMEMBER_API_DELETEMEMBER_URL + '/' + adminId);
    }

}
export default new AdmissionCommiteeMemberService();