import React, { Component } from 'react';

class Review extends Component {

    // state = {
    //     feeling: {...this.props.review.feeling},
    //     understanding: {...this.props.review.feeling},
    //     support: {...this.props.review.support},
    //     comments: {...this.props.review.support}
    // }

    componentDidMount() {
        console.log('Review Mounted', this.props.review);
    }

    handleClick = () => {
        console.log('reviewPage Clicked', this.props);
        //POST through APP, but passed down
        this.props.submitBtn(this.props.review.feeling);
        //go to feedback page
        this.props.history.push('/feedback')
    };//end handleClick

    render() {
        return (
            <div>
                <h1>Review Your Feedback!</h1>
                {/* VERIFY THE INFO SHOWS ON THE DOM */}
                {/* <p>{JSON.stringify(this.props.review)}</p> */}
                <h3>Feelings: {this.props.review.feeling}</h3>
                <h3>Understanding: {this.props.review.understanding}</h3>
                <h3>Support: {this.props.review.support}</h3>
                <h3>Comments: {this.props.review.comments}</h3>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );//end return
    };//end render
};//end class

export default Review;