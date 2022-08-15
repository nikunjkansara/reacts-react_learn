import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

export class Click extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'counter': 1
        };
    }

    UpdateClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
    return (
      <div><button onClick={this.UpdateClick} >{this.props.name} {this.state.counter} Click</button></div>
    )
  }
}

export default HigherOrderComp(Click);