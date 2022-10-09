import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class ViewCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            courseName: '',
            courseDuration: '',
            courseFees: ''
        }
    }

    componentDidMount(){
        CourseService.findByCourseId(this.state.id).then( res => {
            console.log(res.data);
            for (var j = 0; j < res.data.length; j++){
                console.log(this.setState(res.data[j]));
                            
                }
        })
        
    }
    cancel(){
        this.props.history.push('/viewAllCourses');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Course Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Course Name: </label>
                            <div> { this.state.courseName }</div>
                        </div>
                        <div className = "row">
                            <label> Course Duration: </label>
                            <div> { this.state.courseDuration }</div>
                        </div>
                        <div className = "row">
                            <label> Course Fees: </label>
                            <div> { this.state.courseFees }</div>
                        </div>
                        <div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCourseComponent;

