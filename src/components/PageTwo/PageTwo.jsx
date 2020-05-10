import React, { Component } from 'react';

class PageTwo extends Component {

    state = {
        understand: ''
    }

    componentDidMount() {
        console.log('Page Two Mounted');
    }

    handleClick = () => {
        console.log('pageTwo Clicked');
        if(this.state.understand < 0 || this.state.understanding > 10 || this.state.understanding === ''){
            alert('please insert a number from 1 through 10')
        } else {
            this.props.dispatch({
                type: 'understand',
                payload: this.state.understand
            })
            this.props.history.push('/pagethree')
        }
    };//end handleClick

    handleChange = (event, property) => {
        console.log('in handleChange PAGE TWO', event.target.value);
        //change state
        this.setState({
            ...this.state.understand,
            [property]: event.target.value
        })
    };//end handleChange
    
    goBack = () => {
        //pushes to previous page 
        this.props.history.push('/');
    };// end goBack
    
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input onChange={(event) => this.handleChange(event, 'understand')} type="number" placeholder="Understanding?" />
                <button onClick={this.handleClick}>Next</button>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageTwo;