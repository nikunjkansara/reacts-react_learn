import React, {Component} from "react";

class ClassProp extends Component {
    render() {
        return (
            <div>
            <h1>This is Class Property Example</h1>
            <p>This is the {this.props.name}</p>
            <p>This is prop location {this.props.location}</p>
            </div>

            
        );
    }
}
export default ClassProp;