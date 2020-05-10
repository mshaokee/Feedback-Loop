import React, { Component } from 'react';
import { Button } from '@material-ui/core';


class Feedback extends Component {
    componentDidMount() {
        console.log('Feedback Mounted');
    }

    handleClick = () => {
        console.log('Feedback Clicked');
        //make sure data goes to redux using type, also pushing
        this.props.dispatch({
            type: 'reset'
        })
        this.props.history.push('/')
    };//end handleClick

    render() {
        return (
            <div>
                <h1>Feedback</h1>
                <Button variant="outlined" onClick={this.handleClick}>Leave New Feedback</Button>
            </div>
        );//end return
    };//end render
};//end class

export default Feedback;