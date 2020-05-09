import React, { Component } from 'react';


class PageOne extends Component {
    componentDidMount(){
        console.log('Page One Mounted');
    }

    handleClick = () => {
        console.log('pageOne Clicked');
        this.props.history.push('/pagetwo')
    };//end handleClick
    
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input type="number" placeholder="Feeling?"/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageOne;