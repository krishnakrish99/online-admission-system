import React, { Component } from 'react';
import CourseService from '../services/CourseService';
class ViewCourseList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                courses: []
        }
        
        this.viewAll = this.viewAll.bind(this);     
    }
    componentDidMount(){
        CourseService.getCoursesDetails().then((response) => {
            this.setState({ courses: response.data})
        });
    }
    
    
    viewAll(){
        this.props.history.push(`/viewAllCourses`);
    }
    
    
    render() {
        return (
            <div>
                <h2 className="text-center">Course List</h2>
                 <div >
                    <button className="btn btn-primary" onClick={this.viewAll}> View Courses</button>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.courses.map(
                                        course => 
                                        <tr key = {course.id}> 
                                            <td align="right"> {course.courseId}</td>
                                             <td> {course.courseName}</td>
                                             <td> {course.courseDuration}</td>
                                             <td> {course.courseFees}</td>                               
                                                
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

export default ViewCourseList;