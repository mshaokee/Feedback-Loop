import React, { Component } from 'react';

class PageFour extends Component {

    state = {
        comments: ''
    }

    componentDidMount() {
        console.log('Page Four Mounted');
    }

    handleClick = () => {
        console.log('pageFour Clicked');
            this.props.dispatch({
                type: 'comments',
                payload: this.state.comments
            })
            this.props.history.push('/review')
    };//end handleClick

    handleChange = (event, property) => {
        console.log('in handleChange PAGE FOUR', event.target.value);
        //change state
        this.setState({
            ...this.state.comments,
            [property]: event.target.value
        })
    };//end handleChange

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <input onChange={(event) => this.handleChange(event, 'comments')} type="text" placeholder="Comments?" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageFour;