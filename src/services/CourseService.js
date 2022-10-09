import axios from 'axios';

const COURSE_API_BASE_URL = "http://localhost:8082/courses";


class CourseService {

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }
    getCoursesDetails(){
        return axios.get(COURSE_API_BASE_URL);
    }
    createCourse(course){
        return axios.post(COURSE_API_BASE_URL, course);
    }
    updateCourse(course,courseId){
        return axios.put(COURSE_API_BASE_URL +'/' + courseId,course);
    }
    findByCourseId(courseId){
        return axios.get(COURSE_API_BASE_URL +'/' + courseId);
    }
    deleteById(courseId){
        return axios.delete(COURSE_API_BASE_URL +'/' + courseId);
    }

}

export default new CourseService()
