import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class PageFour extends Component {

    state = {
        comments: ''
    }

    componentDidMount() {
        console.log('Page Four Mounted');
    }

    handleClick = () => {
        console.log('pageFour Clicked');
            this.props.dispatch({
                type: 'comments',
                payload: this.state.comments
            })
            this.props.history.push('/review')
    };//end handleClick

    handleChange = (event, property) => {
        console.log('in handleChange PAGE FOUR', event.target.value);
        //change state
        this.setState({
            ...this.state.comments,
            [property]: event.target.value
        })
    };//end handleChange

    goBack = () => {
        console.log('going back');
        this.props.history.push('/pagethree');
    };// end goBack


    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <TextField onChange={(event) => this.handleChange(event, 'comments')} type="text" placeholder="Comments?" />
                <Button variant="outlined" onClick={this.handleClick}>Next</Button>
                <Button variant="outlined" onClick={this.goBack}>Go Back</Button>
            </div>
        );//end return
    };//end render
};//end class

export default PageFour;