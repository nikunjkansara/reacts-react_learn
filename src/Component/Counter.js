import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'Counter': 1
        };
    }

    MouseOver = () => {
        this.setState({
            Counter: this.state.Counter + 1
        });
    }
  render() {
    return (
      <div>
        <button onMouseOver={this.MouseOver}>{this.props.name} Increment {this.state.Counter} on MouseOver</button>
      </div>
    )
  }
}

export default HigherOrderComp(Counter); 