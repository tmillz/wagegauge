import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import Button from 'react-bootstrap/Button';

var config = {
    apiKey: "REPLACE_WITH_YOURS",
    authDomain: "wagegauge.firebaseapp.com",
    databaseURL: "https://wagegauge.firebaseio.com",
    projectId: "wagegauge",
    storageBucket: "wagegauge.appspot.com",
    messagingSenderId: "803556069699"
};

firebase.initializeApp(config);

class Signin extends Component {

    //state = {isSignedIn: false};

    constructor(props) {
        super(props);
        this.state = { isSignedIn: false };
    }

    uiConfig = {
        signInSuccessUrl: 'https://wagegauge.org',
        //signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        //callbacks: {
        //  signInSuccessWithAuthResult: () => false
        //},
        tosUrl: 'https://wagegauge.org',
        privacyPolicyUrl: function() {
          window.location.assign('https://wageguage.org');
        },
    };

    // Listen to the Firebase Auth state and set the local state
    componentDidMount() {
        this.setState({ isSignedIn: this.props.isSignedIn});
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
    }
    
    // Make sure we un-register Firebase observers when the component unmounts
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.props.isSignedIn) {
            return (
                <div className="App">
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                </div>
            );
        } return (
            <div className="App-header">
              <p>You are signed in as {firebase.auth().currentUser.displayName}</p>
              {/*  onclick={()=>{ f1(); f2() }} */}
              {/*<Button variant="info" className="Button" onClick={ () =>{ firebase.auth().signOut();
                                                                         this.props.handler(this.state.isSignedIn)}}>Sign out</Button>*/}
              <Button variant="info" className="Button" onClick={ () => firebase.auth().signOut()}>Sign out</Button>
            </div>
        );

        /*return (
            <div>

                {!this.state.isSignedIn 
            ? <div className="App">
                   <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
              </div> 
            : <div className="App-header">
                <p>You are signed in as {firebase.auth().currentUser.displayName}</p>
                <Button variant="info" className="Button" onClick={() => firebase.auth().signOut()}>Sign out</Button>
              </div>}

            </div>

        );*/
    }
}

export default Signin;
