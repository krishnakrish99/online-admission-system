import React, { Component } from 'react'
import applicantService from '../services/applicantService';
import CourseService from '../services/CourseService';
import Staffheader from './Staffheader';

class form extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        studentname: '',
        contactNumber: '',
        studentDegree: '',
        studentGraduationPercent: '',
        password: '',
        course: '',
        fields: {},
        errors: {},
        courses: []
      };
    }
    componentDidMount(){
      CourseService.getCourses().then((response) => {
          this.setState({ courses: response.data})
      });
  }
  
    handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if (!fields["studentname"]) {
        formIsValid = false;
        errors["studentname"] = "Name is Required";
      }
  
      if (typeof fields["studentname"] !== "undefined") {
        if (!fields["studentname"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["studentname"] = "Only letters";
        }
      }

      //contact number
      if (!fields["contactNumber"]) {
        formIsValid = false;
        errors["contactNumber"] = "Please enter contact Number";
      }
  
      if (typeof fields["contactNumber"] !== "undefined") {
        if (!fields["contactNumber"].match( /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/)) {
          formIsValid = false;
          errors["contactNumber"] = "Please enter valid 10 digit Number";
        }
      }

      if (!fields["studentDegree"]) {
        formIsValid = false;
        errors["studentDegree"] = "Please enter your Degree";
      }

      if (!fields["studentGraduationPercent"]) {
        formIsValid = false;
        errors["studentGraduationPercent"] = "Please enter your Graduation Percent";
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Password field can not be empty";
      }
  
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
          formIsValid = false;
          errors["password"] = "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
        }
      }

      if (!fields["course"]) {
        formIsValid = false;
        errors["course"] = "course can not be empty";
      }
  
      this.setState({ errors: errors });
      return formIsValid;
    }
  
    contactSubmit(e) {
      e.preventDefault();
      let fields = this.state.fields;
      let applicant = {studentname: fields["studentname"], contactNumber: fields["contactNumber"], studentDegree: fields["studentDegree"], studentGraduationPercent: fields["studentGraduationPercent"],password: fields["password"],status: "APPLIED",admission:{course: fields["course"]}};
        console.log('applicant => ' + JSON.stringify(applicant));
    
      if (this.handleValidation()) {
        applicantService.addApplicant(applicant).then(res =>{
            alert("Form submitted");
            window.open("/form", "_self");
        });
        
        } else {
        alert("Form has errors.");
      }
    }
    
  
    handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
    }
  
    render() {
      return (
        
        <div>
          <Staffheader />
            <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                            <h2 className="text-center">Addmission Form</h2>
                 
                                <div className = "card-body">
                   
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            {/* <div className="col-md-6"> */}
            <div className = "form-group">
                                       
              <fieldset>
              <label> Name: </label>
                <input
                  ref="studentname"
                  type="text"
                  size="30"
                  placeholder="student Name"
                  className="form-control"
                  onChange={this.handleChange.bind(this, "studentname")}
                  value={this.state.fields["studentname"]}
                />
                <span style={{ color: "red" }}>{this.state.errors["studentname"]}</span>
                <br />
                <label> Contact Number: </label>
              
                <input
                  refs="contactNumber"
                  placeholder="Contact Number"
                  className="form-control"
                  
                  onChange={this.handleChange.bind(this, "contactNumber")}
                  value={this.state.fields["contactNumber"]}
                />
                <span style={{ color: "red" }}>{this.state.errors["contactNumber"]}</span>
                <br />
                
                <label> Student Degree: </label>
              
                <input
                  refs="studentDegree"
                  type="text"
                  size="30"
                  className="form-control"
                  
                  placeholder="Student Degree"
                  onChange={this.handleChange.bind(this, "studentDegree")}
                  value={this.state.fields["studentDegree"]}
                />
                <span style={{ color: "red" }}>{this.state.errors["studentDegree"]}</span>
                <br />
                
                <label> Graduation Percent: </label>
              
                <input
                  refs="studentGraduationPercent"
                  placeholder="GraduationPercent"
                  className="form-control"
                  
                  onChange={this.handleChange.bind(this, "studentGraduationPercent")}
                  value={this.state.fields["studentGraduationPercent"]}
                />
                <span style={{ color: "red" }}>{this.state.errors["studentGraduationPercent"]}</span>
                <br />
                <label> Password: </label>
              
                <input
                  refs="password"
                  type="password"
                  placeholder="password"
                  className="form-control"
                  
                  onChange={this.handleChange.bind(this, "password")}
                  value={this.state.fields["password"]}
                />
                <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                <br />
                
                <label> Course Name: </label>
                <select id="course" name="course"
                refs="course"
                placeholder="course"
                className="form-control"

                onChange={this.handleChange.bind(this, "course")}
              
                value={this.state.fields["course"]}
                  >
                     {
                                    this.state.courses.map(
                                        course => 
                                        <option key = {course.id}>
                                           
                                             <option> {course.courseName}</option>
                                                                          
                                                                                      </option>
                                    )
                                }
                    {/* <option>course</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="MBBS">MBBS</option>
                    <option value="FINANCE">FINANCE</option>
                    <option value="GRAPHIC DESIGNING">GRAPHIC DESIGNING</option>
                    <option value="ARTS">ARTS</option> */}
     
                   
                    </select>
                <span style={{ color: "red" }}>{this.state.errors["course"]}</span>
                <br />
                <button className="btn btn-primary" style={{color:"black"}}  >submit</button>                            
                {/* <button style={{marginLeft: "10px"}} className="btn btn-dark"  onClick={() => {window.open("/home", "_self")}}>back</button>
                                        */}
              </fieldset>
            </div>
            {/* <button className="btn btn-dark">submit</button> */}
          </form>
          
                
          
                                    
          </div>
          </div>
          </div>
          </div>
        </div>
      );
    }
  }
  
  export default form