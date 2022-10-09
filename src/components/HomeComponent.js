import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import pic from "./images/home1.jpg";
class HomeComponent extends React.Component{

    render(){
      
return(
    <div>

    <HeaderComponent />
    <br></br>
    <div className="container">
    <img src={pic} /><br></br><br></br>
    <center><h1>Appropriate Courses Available For <br></br> Making Your Future Bright </h1></center>
    <br></br>
    <div className="divhomeleader">  
    <div className="Eng"></div>
    <div className="MBA"></div>
    <div className="MBBS"></div>
    </div>

    <div className="divhomeleader">  
    <div className="finance"></div>
    <div className="ART"></div>
    <div className="Design"></div>
    </div>
</div>
    <br></br>
    <FooterComponent />
    </div>
)
}
}


export default HomeComponent