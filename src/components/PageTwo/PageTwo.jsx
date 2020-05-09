import React, { Component } from 'react';

class PageTwo extends Component {
    componentDidMount() {
        console.log('Page Two Mounted');
    }

    handleClick = () => {
        console.log('pageTwo Clicked');
        this.props.history.push('/pagethree')
    };//end handleClick
    
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="number" placeholder="Understanding?" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageTwo;