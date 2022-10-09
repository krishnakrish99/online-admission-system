import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class CreateCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            errors:{},
            course:{},
            id: this.props.match.params.id,
            courseName: '',
            courseDuration: '',
            courseFees: ''
        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseDurationHandler = this.changeCourseDurationHandler.bind(this);
        this.changeCourseFeeHandler = this.changeCourseFeeHandler.bind(this);
        
        this.saveCourse = this.saveCourse.bind(this);
    }

    // step 3
    //componentDidMount(){

        // step 4
     //   if(this.state.id === '_add'){
     //       return
     //   }else{
       //     CourseService.getCourseById(this.state.id).then( (res) =>{
       //         let course = res.data;
       //         this.setState({courseName: course.courseName,
       //             courseDuration: course.courseDuration,
        //            courseFee : course.courseFee
        //        });
        //    });
      //  }        
   // }
   handleValidation() {
    let course = this.state.course;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!course["courseName"]) {
      formIsValid = false;
      errors["courseName"] = "Cannot be empty";
    }
    if (typeof course["courseName"] !== "undefined") {
        if (!course["courseName"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["courseName"] = "Only letters";
        }
      }
    

    //Course Duration
    if (!course["courseDuration"]) {
      formIsValid = false;
      errors["courseDuration"] = "Cannot be empty";
    }
    if (!course["courseFees"]) {
        formIsValid = false;
        errors["courseFees"] = "Cannot be empty";
      }
   

    this.setState({ errors: errors });
    return formIsValid;
  }

    saveCourse = (e) => {
        e.preventDefault();
        let course = this.state.course;
        //let course = {courseName: this.state.courseName, courseDuration: this.state.courseDuration, courseFees: this.state.courseFees};
        //console.log('course => ' + JSON.stringify(course));

        // step 5
       //if(this.state.id === '_add'){
        if (this.handleValidation()) {
           CourseService.createCourse(course).then(res =>{
               this.props.history.push('/viewAllCourses');
        
            });
        } else {
            alert("Form has errors.");
          }
       // }
       //else{
       //     CourseService.updateCourse(course, this.state.id).then( res => {
        //        this.props.history.push('/employees');
        //    });
       // }
    }
    handleChange(cour, e) {
        let course = this.state.course;
        course[cour] = e.target.value;
        this.setState({ course });
      }
    changeCourseNameHandler= (event) => {
       // console.log(event.target.value);
        //this.setState({courseName: event.target.value});
    }

    changeCourseDurationHandler= (event) => {
        //this.setState({courseDuration: event.target.value});
    }

    changeCourseFeeHandler= (event) => {
       // this.setState({courseFees: event.target.value});
    }

    cancel(){
        this.props.history.push('/viewAllCourses');
    }

    getTitle(){
       
            return <h3 className="text-center">Add Course</h3>
       
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
                                    <form >
                                        <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="Course Name" name="courseName" className="form-control" 
                                                value={this.state.course["courseName"]} onChange={this.handleChange.bind(this, "courseName")}/>
                                                <span style={{ color: "red" }}>{this.state.errors["courseName"]}</span>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Duration: </label>
                                            <input placeholder="Course Duration" name="courseDuration" className="form-control" 
                                                value={this.state.course["courseDuration"]} onChange={this.handleChange.bind(this, "courseDuration")}/>
                                                <span style={{ color: "red" }}>{this.state.errors["courseDuration"]}</span>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Fees: </label>
                                            <input placeholder="Course Fees" name="courseFees" className="form-control" 
                                                value={this.state.course["courseFees"]} onChange={this.handleChange.bind(this, "courseFees")}/>
                                                <span style={{ color: "red" }}>{this.state.errors["courseFees"]}</span>
                                                
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveCourse}>Save</button>
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

export default CreateCourseComponent;