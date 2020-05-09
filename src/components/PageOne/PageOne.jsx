import React, { Component } from 'react';


class PageOne extends Component {
    componentDidMount(){
        console.log('Page One Mounted');
    }

    handleClick = () => {
        console.log('pageOne Clicked');
        this.props.history.push('/pagetwo')
    };//end handleClick

    handleChange = () => {
        console.log('in handleChange');
        
    };//end handleChange
    
    render() {
        return (
            <div>
                <h1>On a scale of 1 through 10, reflect upon the following questions.</h1>
                <h1>How are you feeling today?</h1>
                <input onChange={this.handleChange} type="number" placeholder="Feeling?"/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageOne;