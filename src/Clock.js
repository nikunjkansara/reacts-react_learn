/*
* React LifeCycle function with state and setState
*/
import React, { Component } from 'react'

export class Clock extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(
            () => this.getdate(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getdate = () => {
        this.setState({
            date: new Date()
        });
        //const setDate = objDate.getDate()+"/"+objDate.getMonth()+"/"+objDate.getFullYear() ;
        //const setDate = new Date();
        //return setDate.toLocaleTimeString();
    }

    render() {
        return (
            <div>
                <div>Timer</div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock