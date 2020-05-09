import React, { Component } from 'react';


class PageOne extends Component {

    state = {
        feeling: ''
    }

    componentDidMount(){
        console.log('Page One Mounted');
    }

    handleChange = (event, property) => {
        console.log('in handleChange', event.target.value);
        //change state so we can send back
        this.setState({
            //do not mutate state with spread
            ...this.state.feeling,
            [property]: event.target.value
        })
    };//end handleChange

    handleClick = () => {
        console.log('pageOne Clicked');
        //when next is clicked, will go to page two
        this.props.history.push('/pagetwo')
        //need to send data back to redux
        this.props.dispatch({
            type: 'feeling',
            payload: this.state.feeling
        })

    };//end handleClick
    
    render() {
        //confirm that state is changing with handleChange
        // console.log(this.state);
        return (
            <div>
                <h1>On a scale of 1 through 10, reflect upon the following questions.</h1>
                <h1>How are you feeling today?</h1>
                <input onChange={(event) => this.handleChange(event, 'feeling')} type="number" placeholder="Feeling?"/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageOne;