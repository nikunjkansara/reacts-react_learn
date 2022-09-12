import logo from './logo.svg';
import './App.css';

import FunctionCom from './FuncitonalCom';
import ClassCom from './ClassCom';
import ClassProp from './ClassProp';
import State from './State';
import React, { Fragment } from 'react';
import Greeting from './SetState/Greeting';
import { ClassComp, ClassComp1 } from './Component/ClassComp';
import FunctionComp from './Component/FunctionComponent';
import Click from './Component/Click';
import Counter from './Component/Counter';
import Clock from './Clock';
import Conditional from './Conditional';
import List from './Component/List';
import Form from './Form/Form';
import Calculator from './StateUp/Calculator';

import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Post from './Component/Post';
import Header from './Component/Header';
import LeftCard from './Component/LeftCard';

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

class App extends React.Component {
  styles = {
    fontStyle: 'bold',
    fontSize: '20px'
  };
  render() {
    return (
      <div ClassName="App">
        <h1 class="{this.styles}">State Change.</h1>
        <State />

        <Greeting />
        <ClassComp />
        <ClassComp1 />
        <FunctionComp />
        <Counter />
        <Click />
        <Clock />
        <Conditional />
        <List />
        <Form />

        <Calculator />



        <Fragment>

          <Header />

          <main className="my-5 py-5">
            <Container className="px-0">
              <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

                <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                    <LeftCard />
                </Col>

                <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                  <Post />
                </Col>

              </Row>
            </Container>
          </main>

        </Fragment>
      </div>
    );
  }
}

export default App;
