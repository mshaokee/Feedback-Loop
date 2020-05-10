import React, { Component } from 'react';
import AdminData from '../AdminData/AdminData'
import './Admin.css'

class Admin extends Component {

    //button to take you back home
    goHome = () =>{
        this.props.history.push('/')
    };//end gohome

    render() {
        return (
            <div>
                <h1>Feedback Results</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* MAP THROUGH DATA */}
                        {this.props.feedback.map((info) => {
                            return (
                                //call to AdminData which displays info
                                <AdminData
                                    key={info.id}
                                    info={info}
                                    deleteHandle={this.props.deleteHandle}
                                />
                            )//end return
                        })}
                    </tbody>
                </table>
                <div>
                    <button onClick={this.goHome}>Enter Feedbacks</button>
                </div>
            </div>
        );//end return
    };//end render
};//end class

export default Admin;