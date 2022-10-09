import React, { Component } from 'react';
import CourseService from '../services/CourseService';
import Staffheader from './Staffheader'

class ListCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                courses: []
        }
        this.addCourse = this.addCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.viewAllCourses = this.viewAllCourses.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.viewCourse = this.viewCourse.bind(this);
        
    }
    componentDidMount(){
        CourseService.getCourses().then((response) => {
            this.setState({ courses: response.data})
        });
    }
    addCourse(){
        this.props.history.push('/addCourse');
    }
    updateCourse(courseId){
        this.props.history.push(`/updateCourse/${courseId}`);
    }
    viewAllCourses(){
        this.props.history.push(`/viewAllCourses`);
    }
    
    deleteCourse(courseId){
        CourseService.deleteById(courseId).then( res => {
            this.setState({courses: this.state.courses.filter(course => course.courseId !== courseId)});
            console.log(this.state.courses);
        });
    }
    viewCourse(courseId){
        this.props.history.push(`/findByCourseId/${courseId}`);
    }
    render() {
        return (
            <div>
                {/* <button className="btn btn-dark" onClick={() => {window.open("/StaffProfile", "_self");}}> Back</button> */}
                 <Staffheader />
                <h2 className="text-center">Course List</h2>
                 <div >
                    <button className="btn btn-primary" onClick={this.addCourse}> Add Course</button>
                 </div>
                 <br></br>
                 
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> CourseId</th>
                                    <th> Course Name</th>
                                    <th> Course Duration</th>
                                    <th> Course Fees</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.courses.map(
                                        course => 
                                        <tr key = {course.id}> 
                                            <td> {course.courseId}</td>
                                             <td> {course.courseName}</td>
                                             <td> {course.courseDuration}</td>
                                             <td> {course.courseFees}</td>                               
                                                 <td>
                                                 <button onClick={ () => this.updateCourse(course.courseId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourse(course.courseId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCourse(course.courseId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        );
    }
}

export default ListCourseComponent;