import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Login extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="App">
                    Login
                </div>
                <Button variant="info" className="Button">Login Anonomouly</Button>
            </header>
        )
    }
}

export default Login;