import React, { Component } from 'react';
import './Chat.css';
import Form from './Form';
//import Message from './Message';

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isSignedIn: false,
            user: null };
    }

    componentDidMount() {
        this.setState({ 
            isSignedIn: this.props.isSignedIn,
            user: this.props.user});
    }

    render() {
        return (
            <header className="App-header">
                {/*<div className="App">
                    Chat
                </div>*/}
                <div className="app-list">
                    <Form user={this.props.user} />
                </div>
            </header>
        )
    }
}

export default Chat;