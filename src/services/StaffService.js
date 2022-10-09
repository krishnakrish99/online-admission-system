import axios from 'axios';

const STAFF_API_BASE_URL = "http://localhost:8082/api/v1/staffs";

class StaffService {

    getStaffs(){
        return axios.get(STAFF_API_BASE_URL);
    }
    addStaff(staff){
        return axios.post(STAFF_API_BASE_URL,staff);
    }
     getStaffById(staffId){
        return axios.get(STAFF_API_BASE_URL +'/'+staffId);
     }
   
    updateStaff(staff,staffId){
        return axios.put(STAFF_API_BASE_URL +'/'+staffId,staff);
    }

    deleteStaff(staffId){
        return axios.delete(STAFF_API_BASE_URL +'/'+staffId);
    }
   }
   export default new StaffService();