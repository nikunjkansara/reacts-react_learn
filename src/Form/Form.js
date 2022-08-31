import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            'value':'New text',
            'selectValue':3,
            'checked': true,
            'selectAll': false

        }
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert("OnSubmit: " + this.state.value);
        event.preventDefalut();
    }

    handleMultiInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    }

    selectAll = (event) => {
        const taget = event.target;
        if(!taget.checked) {
            taget.checked = true;
            this.setState({
                'selectAll': false
            });
        } else {
            taget.checked = false;
            this.setState({
                'selectAll': true
            });
        }
         
    }

    selectChange = (event) => {
        console.log('event:' + event);
        this.handleChange(event);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>{this.state.value}</label>
                
                <br/>

                <label>
                    Name:
                    <input name="txtName" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <br/>

                <select name="seleNumber" onChange={this.selectChange} value={this.state.selectValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select> 
                
                <br/>

                <input type="file" />

                <br/>

                <lable>Check Multiple checkboxes: </lable>
                <input type="checkbox" name="chkAll" checked={this.state.selectAll} onChange={this.selectAll} /><lable>Check All</lable>
                <br/>
                <input type="checkbox" name="chkOpen[]" checked={this.state.selectAll} onChange={this.handleMultiInput} />
                <input type="checkbox" name="chkOpen[]" checked={this.state.selectAll} onChange={this.handleMultiInput} />
                <input type="checkbox" name="chkOpen[]" checked={this.state.selectAll} onChange={this.handleMultiInput} />
                <input type="checkbox" name="chkOpen[]" checked={this.state.selectAll} onChange={this.handleMultiInput} />

                <br/>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form