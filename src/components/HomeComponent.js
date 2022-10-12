import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class HomeComponent extends React.Component{

    render(){
      
return(
    <div>

    <HeaderComponent />
    
    <div className="container">
    <div className="home1"></div>
        
    {/* <img src={pic} /> */}
   
    <center><h3>Appropriate Courses Available For Making Your Future Bright </h3></center>
    
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