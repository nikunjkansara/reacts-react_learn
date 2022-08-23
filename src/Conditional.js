import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
        super(props);
        this.UserGreeting = this.UserGreeting.bind(this);
        this.GuestGreeting = this.GuestGreeting.bind(this);
        this.state = {
            'status': false,
            'message': 'Login'
        };
    }

    UserGreeting = () => {
        return <h1>UserGreeting</h1>;
    }

    GuestGreeting = () => {
        return <h1>GuestGreeting</h1>;
    }

    Greeting = () => {
        const param = this.state.status;
        console.log('param', param);
        if (param) {
            this.setState({
                'status': false,
                'message': 'Login'
            });
            //return <this.UserGreeting />
        } else {
            this.setState({
                'status': true,
                'message': 'Login out'
            });
            //return <this.GuestGreeting />
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.Greeting}> Click to change value {this.state.status}</button>
            </div>
        )
    }
}

export default Conditional