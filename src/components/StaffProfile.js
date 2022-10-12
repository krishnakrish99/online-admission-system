import React, { Component } from 'react'
import Staffheader from './Staffheader'


class StaffProfile extends Component {
    render() {
        return (
            
                <div>
                <Staffheader />
                <div className='user1'></div>
                {/* <div class="center">
                <h1>Welcome, User Id: {localStorage.getItem("StaffId")}
                </h1>
                </div> */}
                </div>

        )
    }
}

export default StaffProfile;
