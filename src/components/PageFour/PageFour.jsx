import React, { Component } from 'react';

class PageFour extends Component {
    componentDidMount() {
        console.log('Page Four Mounted');
    }

    handleClick = () => {
        console.log('pageFour Clicked');
        this.props.history.push('/review')
    };//end handleClick

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <input type="number" placeholder="Comments?" />
                <button>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageFour;