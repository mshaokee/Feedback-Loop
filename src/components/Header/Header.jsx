import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4>Don't forget it!</h4>
                    <h2>On a scale of 1 through 10, reflect upon the following questions.</h2>
                </header>
            </div>
        );//end return
    };//end render
};//end class

export default Header;