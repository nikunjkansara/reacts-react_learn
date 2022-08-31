import React, { Component } from 'react'

export class List extends Component {
    constructor(props) {
        super(props);
        //this.KeyValue = this.KeyValue.bind(this);
        const number = [1, 2, 3, 4, 5];
        const doubled = number.map((number) => number * 2);
        this.state = {
            doubled: doubled
        };
    }

    KeyValue = () => {
        console.log('Called KeyValue');
        const data = [
            { id: 1, name: 'Manu Kansara' },
            { id: 2, name: 'Vinu Kansara' },
            { id: 3, name: 'Kanu Kansara' },
        ];

        return (
            <div>
                {data.map((n, index) => (
                    <p>{index}:{n.id}-{n.name}</p>
                ))}
            </div>
        );
    }

    NumberList = () => {
        
    }

    render() {
        return (
            <div>
                <div>{this.KeyValue()}</div>
                <div>{this.state.doubled}</div>
                
            </div>
        )
    }
}

export default List