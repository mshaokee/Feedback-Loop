import React, { Component } from 'react';


class PageOne extends Component {

    state = {
        feeling: ''
    }

    componentDidMount(){
        console.log('Page One Mounted');
    }

    handleClick = () => {
        console.log('pageOne Clicked');
        this.props.history.push('/pagetwo')
    };//end handleClick

    handleChange = (event, property) => {
        console.log('in handleChange', event.target.value);
        
    };//end handleChange
    
    render() {
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