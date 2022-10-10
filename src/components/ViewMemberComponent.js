import React, { Component } from 'react';
import AdmissionCommiteeMemberService from '../services/AdmissionCommiteeMemberService'

class ViewMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            adminName:'',
            adminContact:'',
            adminId:''
        }
    }

    // componentDidMount(){
    //     AdmissionCommiteeMemberService.getMemberById(this.state.id).then( res => {
    //         this.setState({Member: res.data});
    //     })
    // }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Member Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Member  adminName: </label>
                            <div> { this.state.Member.adminName }</div>
                        </div>
                        <div className = "row">
                            <label> Member adminConatct: </label>
                            <div> { this.state.Member.adminContact }</div>
                        </div>
                        <div className = "row">
                            <label> Member adminID: </label>
                            <div> { this.state.Member.adminId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMemberComponent
