import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Home from './Home';
import Articles from './Articles';
import Login from './Login';
import Chat from './Chat';
import Signin from './Signin';
import firebase from 'firebase/app';
import Form from './Form';
// import Message from './Message';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isSignedIn: false,
      user: null };
  }

  componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => this.setState({isSignedIn: !!user, user: user}));
  }

  render() {
    return (
      <Router>
      <Navbar>
        <Nav className="mr-auto" >
          <Nav.Item>
            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/articles">Articles</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/chat">Chat</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            {!this.state.isSignedIn 
            ? <Nav.Link as={NavLink}  to="/signin">Sign in</Nav.Link> 
            : <Nav.Link as={NavLink}  to="/signin">Sign out</Nav.Link>}
          </Nav.Item>
        </Nav>
      </Navbar>
        <div className="content">
          <Route exact path="/" component={ Home } />
          <Route path="/articles" component={ Articles } />
          <Route path="/chat" render={ (props) => <Chat {...props} 
            isSignedIn={ this.state.isSignedIn } user={ this.state.user } /> }/>
          <Route path="/form" render={ (props) => <Form {...props} 
            isSignedIn={ this.state.isSignedIn } user={ this.state.user } /> }/>
          <Route path="/login" component={ Login } />
          <Route path="/signin" render={ (props) => <Signin {...props} 
            isSignedIn={ this.state.isSignedIn } /> }/>
        </div>
      </Router>
    );
  }
}

export default App;
