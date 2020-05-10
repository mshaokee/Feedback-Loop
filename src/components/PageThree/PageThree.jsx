import React, { Component } from 'react';

class PageThree extends Component {

    state = {
        support: ''
    }

    componentDidMount() {
        console.log('Page Three Mounted');
    }

    handleClick = () => {
        console.log('pageThree Clicked');
        if (this.state.support < 0 || this.state.support > 10 || this.state.support === '') {
            alert('please insert a number from 1 through 10')
        } else {
            this.props.dispatch({
                type: 'support',
                payload: this.state.support
            })
            this.props.history.push('/pagefour')
        }
    };//end handleClick

    handleChange = (event, property) => {
        console.log('in handleChange PAGE THREE', event.target.value);
        //change state
        this.setState({
            ...this.state.support,
            [property]: event.target.value
        })
    };//end handleChange

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input onChange={(event) => this.handleChange(event, 'support')} type="number" placeholder="Supported?" />
                <button onClick={this.handleClick}>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageThree;