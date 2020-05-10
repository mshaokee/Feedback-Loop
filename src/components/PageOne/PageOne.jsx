import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';



class PageOne extends Component {

    state = {
        feeling: ''
    }

    componentDidMount(){
        console.log('Page One Mounted');
    }

    handleChange = (event, property) => {
        console.log('in handleChange PAGE ONE', event.target.value);
        //change state so we can send back
        this.setState({
            //do not mutate state with spread
            ...this.state.feeling,
            [property]: event.target.value
        })
    };//end handleChange

    handleClick = () => {
        console.log('pageOne Clicked');
        if (this.state.feeling < 0 || this.state.feeling > 10 || this.state.feeling === ''){
            alert('please insert a number from 1 through 10')
        } else {
            //need to send data back to redux
            this.props.dispatch({
                type: 'feeling',
                payload: this.state.feeling
            })
            //when next is clicked, will go to page two
            this.props.history.push('/pagetwo')
        }
    };//end handleClick
    
    render() {
        //confirm that state is changing with handleChange
        // console.log(this.state);
        return (
            <div>
                <h2>On a scale of 1 through 10, reflect upon the following questions.</h2>
                <h1>How are you feeling today?</h1>
                <TextField onChange={(event) => this.handleChange(event, 'feeling')} type="number" placeholder="Feeling?"/>
                <Button variant="outlined" onClick={this.handleClick}>Next</Button>
            
            </div>
        );//end return
    };//end render
};//end class

export default PageOne;