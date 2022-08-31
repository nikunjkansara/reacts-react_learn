import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
        super(props);
        this.UserGreeting = this.UserGreeting.bind(this);
        this.GuestGreeting = this.GuestGreeting.bind(this);
        this.state = {
            'status': false,
            'message': 'Login',
            'btnTxt': ''
        };
    }

    UserGreeting = () => {
        console.log('UserGreeting');
        this.setState({
            'btnTxt': 'UserGreeting'
        })
    }

    GuestGreeting = () => {
        console.log('GuestGreeting');
        this.setState({
            'btnTxt': 'GuestGreeting'
        })
    }

    Greeting = () => {
        const param = this.state.status;
        console.log('param', param);
        if (param) {
            this.setState({
                'status': false,
                'message': 'Login'
            });
            {this.UserGreeting() }
        } else {
            this.setState({
                'status': true,
                'message': 'Login out'
            });
            {this.GuestGreeting() }
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.Greeting}> Click to change value {this.state.btnTxt}</button>
            </div>
        )
    }
}

export default Conditional