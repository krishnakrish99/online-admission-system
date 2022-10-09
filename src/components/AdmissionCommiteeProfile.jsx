import React, { Component } from 'react'
import AdmissionCommiteeheader from './AdmissionCommiteeheader'


class AdmissionCommiteeProfile extends Component {
    
    render() {
        return (
            <div>
                <AdmissionCommiteeheader />
                <div class="center">
                <h1>Welcome {localStorage.getItem("AdmissionCommiteepassword")}
                </h1></div>
                </div>


        )
    }
}

export default AdmissionCommiteeProfile;
