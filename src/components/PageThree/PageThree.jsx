import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class PageThree extends Component {

    state = {
        support: ''
    }

    componentDidMount() {
        console.log('Page Three Mounted');
    }

    handleClick = () => {
        console.log('pageThree Clicked');
        if (this.state.support < 0 || this.state.support > 10 || this.state.support === '') {
            alert('please insert a number from 1 through 10')
        } else {
            this.props.dispatch({
                type: 'support',
                payload: this.state.support
            })
            this.props.history.push('/pagefour')
        }
    };//end handleClick

    handleChange = (event, property) => {
        console.log('in handleChange PAGE THREE', event.target.value);
        //change state
        this.setState({
            ...this.state.support,
            [property]: event.target.value
        })
    };//end handleChange

    goBack = () => {
        console.log('going back');
        this.props.history.push('/pagetwo');
    };// end goBack

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <TextField onChange={(event) => this.handleChange(event, 'support')} type="number" placeholder="Supported?" />
                <Button variant="outlined" onClick={this.handleClick}>Next</Button>
                <div>
                <Button variant="outlined" onClick={this.goBack}>Go Back</Button>
                </div>
            </div>
        );//end return
    };//end render
};//end class

export default PageThree;