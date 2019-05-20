import React, { Component } from 'react';
import CountUp from 'react-countup';
import './App.css';
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var numbers = [1,2];
var randumNumber = [Math.floor(Math.random()*numbers.length)];
var wages = ["$4,000,000","$7.25"];
var wage = wages[randumNumber];
var endAmounts = [132000000,240];
var endAmount = endAmounts[randumNumber];
var percents = ["1%","minimum"];
var percent = percents[randumNumber];
// need to change this date to the beginning of codefest
var eventStart = new Date('Apr 27, 2019 08:00:00');
var curDateTime = new Date();
var difference = (curDateTime - eventStart) / 1000;
var w = Number(wage.replace(/[^0-9.-]+/g,""));
var startAmount = (difference / 3600.00) * w;

//if (cookies.get('wage')== null){
//    cookies.set('wage', wage, { path: '/' });
//}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Imagine you are a {percent} wage earner making {wage} an hour</h2>
          <h3>What would you do with that money?</h3>
          <CountUp start={startAmount} delay={0} end={endAmount} duration={118800} prefix="$" separator="," decimals={2} >
            {({ countUpRef }) => (
              <div>
                <h1 className="Timer"><span ref={countUpRef} /></h1>
              </div>
            )}
          </CountUp>
          <p>You've earned since the begining of {"Philly{Codefest}"}</p>
  
          <Button variant="info" className="Button">Choose your own tax bracket</Button>
          
          <Button variant="info" className="Button">Make a one time donation</Button>
        </header>
      </div>
    );
  }
}

export default Home;