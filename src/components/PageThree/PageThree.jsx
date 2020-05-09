import React, { Component } from 'react';

class PageThree extends Component {
    componentDidMount() {
        console.log('Page Three Mounted');
    }

    handleClick = () => {
        console.log('pageThree Clicked');
        this.props.history.push('/pagefour')
    };//end handleClick

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="number" placeholder="Supported?" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageThree;