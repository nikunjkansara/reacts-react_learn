import React, {Component} from "react";
import Return from '../img/return.png';
import Reply from '../img/reply-arrow.png';

class Greeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"Greeting",
            btnName:'First Step to React',
            imgSource: Return,
            imgAlt: 'Return'
        };
    }
    
    styles = {
        fontStyle: 'bold',
        fontSize: '22px'
      };

    updatename = () => {
        this.setState({
            name:'Simple',
            btnName:'Welcome to React',
            imgSource: Reply,
            imgAlt: 'reply-arrow.png'
        })
    }

    render() {
        return(
            <div>
                <div className="App">
                    <p style={this.styles} >{this.state.name}</p>
                </div>
                <div>
                    <button type="button" onClick={this.updatename}>{this.state.btnName}</button>
                    &nbsp;
                    <img src={this.state.imgSource} alt={this.state.imgAlt} />
                </div>
                
            </div>
        );
    }
}

export default Greeting;
