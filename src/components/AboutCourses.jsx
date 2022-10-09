import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class AboutCourses extends Component {
    constructor(props) {
        super(props)

        this.state = {
                courses: []
        }
        
    }
    componentDidMount(){
        CourseService.getCourses().then((response) => {
            this.setState({ courses: response.data})
        });
    }
       render() {
        return (
            <div>
                <div className="text-center"><input type="text"  placeholder="search course.." /><button >search</button></div>
                <br></br>
                <h2 className="text-center">Course List</h2>
                 <div >
                    <button className="btn btn-primary" onClick={() => {window.open("/home", "_self");}}>Back</button>
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
                                            <td> {course.courseId}</td>
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

export default AboutCourses;