import React, { Component } from 'react';
import AdminData from '../AdminData/AdminData'

class Admin extends Component {

    render() {
        return (
            <div>
                <h1>Feedback Results</h1>
                <table>
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
            </div>
        );//end return
    };//end render
};//end class

export default Admin;