import React, { Component } from 'react';

class Header extends Component {
    componentDidMount(){
        console.log('Header mounted');
    }

    handleClick = () => {
        console.log('clicked');
        this.props.history.push('/admin');
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4>Don't forget it!</h4>
                    <p><span onClick={this.handleClick}>Admin</span></p>
                </header>
            </div>
        );//end return
    };//end render
};//end class

export default Header;