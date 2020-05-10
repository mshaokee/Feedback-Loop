import React, { Component } from 'react';
// import AdminData from '../AdminData/AdminData'

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
                            {this.props.feedback.map((info) => {
                            return (
                                <tr>
                                    <td>{info.feeling}</td>
                                    <td>{info.feeling}</td>
                                    <td>{info.feeling}</td>
                                    <td>{info.feeling}</td>
                                    <button>delete</button>
                                </tr>
                            )//end return
                            })}
                    </tbody>
                </table>
            </div>
        );//end return
    };//end render
};//end class

export default Admin;