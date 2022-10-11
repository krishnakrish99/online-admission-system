import React, { Component } from 'react'
import Staffheader from './Staffheader'


class StaffProfile extends Component {
    render() {
        return (
            
                <div>
                <Staffheader />
                {/* <div class="center">
                <h1>Welcome {localStorage.getItem("Staffrole")}
                </h1>
                </div> */}
                </div>

        )
    }
}

export default StaffProfile;
