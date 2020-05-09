import React, { Component } from 'react';

class Review extends Component {
    componentDidMount() {
        console.log('Review Mounted', this.props.review);
    }

    handleClick = () => {
        console.log('reviewPage Clicked');
        this.props.history.push('/feedback')
    };//end handleClick

    render() {
        return (
            <div>
                <h1>Review Your Feedback!</h1>
              
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );//end return
    };//end render
};//end class

export default Review;