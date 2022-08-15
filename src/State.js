import React, {Component} from "react";

class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "This is the example of state()",
            butname:"Subscribe"
        }
    }

    ChangeState = () => {
        
        this.setState({
            message: "Message change using setState",
            butname:"Unsubscribe"
        });
    }

    render() {
        return (
            <div className="App">
                <h3>{this.state.message}</h3>
                <button onClick={this.ChangeState}>{this.state.butname}</button>
            </div>
        );
    }
}

export default State;