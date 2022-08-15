import logo from './logo.svg';
import './App.css';

import FunctionCom from './FuncitonalCom';
import ClassCom from './ClassCom';
import ClassProp from './ClassProp';
import State from './State';
import React from 'react';
import Greeting from './SetState/Greeting';
import {ClassComp, ClassComp1} from './Component/ClassComp';
import FunctionComp from './Component/FunctionComponent';
import Click from './Component/Click';
import Counter from './Component/Counter';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        < FunctionCom />
        < ClassCom />
        <ClassProp name="Nikunj" location="Ahmedabad" />

      </header>
    </div>
  );
}

class App extends React.Component{
  styles = {
    fontStyle: 'bold',
    fontSize: '20px'
  };
  render() {
    return(
      <div ClassName="App">
        <h1 class="{this.styles}">State Change.</h1>
        <State />

        <Greeting />
        <ClassComp />
        <ClassComp1 />
        <FunctionComp />
        <Counter />
        <Click />
      </div>
      
      
    );
  } 
}

export default App;
