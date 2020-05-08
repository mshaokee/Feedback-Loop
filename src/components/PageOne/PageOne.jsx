import React, { Component } from 'react';

class PageOne extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input type="number" placeholder="How are you feeling?"/>
                <button>Next</button>
            </div>
        );//end return
    };//end render
};//end class

export default PageOne;