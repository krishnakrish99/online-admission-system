import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class UpdateCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            courseName: '',
            courseDuration: '',
            courseFees: ''
            
        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseDurationHandler = this.changeCourseDurationHandler.bind(this);
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        
        
        this.updateCourse = this.updateCourse.bind(this);
    }
    componentDidMount(){
        CourseService.findByCourseId(this.state.id).then( res => {
            let course = res.data
            console.log(res.data);
            
           // for (var j = 0; j < res.data.length; j++){
                this.setState({ courseName: course.courseName,courseDuration:course.courseDuration,courseFees: course.courseFees })
               // console.log(this.setState(res.data[j]));

                            
               // }
        })
        
    }
    
    updateCourse = (e) => {
        e.preventDefault();
        let course = {courseDuration: this.state.courseDuration, courseFees: this.state.courseFees, courseName:this.state.courseName};
        console.log('course => ' + JSON.stringify(course));
        console.log( 'id =>' + JSON.stringify(this.state.id));
        
           CourseService.updateCourse(  course , this.state.id,).then(res =>{
               this.props.history.push('/viewAllCourses');
        
            });
       
    }
    
    changeCourseNameHandler= (event) => {
        this.setState({courseName: event.target.value});
    }

    changeCourseDurationHandler= (event) => {
        this.setState({courseDuration: event.target.value});
    }

    changeCourseFeeHandler= (event) => {
        this.setState({courseFees: event.target.value});
    }

    cancel(){
        this.props.history.push('/viewAllCourses');
    }

    getTitle(){
       
            return <h3 className="text-center">Update Course</h3>
       
    }    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="Course Name" name="courseName" className="form-control" 
                                                value={this.state.courseName} onChange={this.changeCourseNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Duration: </label>
                                            <input placeholder="Course Duration" name="courseDuration" className="form-control" 
                                                value={this.state.courseDuration} onChange={this.changeCourseDurationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Fees: </label>
                                            <input placeholder="Course Fees" name="courseFees" className="form-control" 
                                                value={this.state.courseFees} onChange={this.changeCourseFeeHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updateCourse}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}


export default UpdateCourseComponent;