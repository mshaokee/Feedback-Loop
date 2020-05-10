import React, { Component } from 'react';

class AdminData extends Component {

    //delete onclick that sends info back to App
    deleteData = () => {
        console.log('deleteData', this.props.info.id);
        //target id
        this.props.deleteHandle(this.props.info.id);
    }

    render() {
        return (
            // display info inside of a table
            <>
                <tr>
                    <td>{this.props.info.feeling}</td>
                    <td>{this.props.info.understanding}</td>
                    <td>{this.props.info.support}</td>
                    <td>{this.props.info.comments}</td>
                    <td onClick={this.deleteData}><button>delete</button></td>
                </tr>
            </>
        );//end return
    };//end render
};//end class

export default AdminData;