import { Component } from "react";

export default class CCCQ1 extends Component {
    constructor(props) {
        super(props);
        this.state = {color:'white'};
    }
    ChangeColor(newColor) {
        this.setState({color:newColor});
    }
    render() {
        return(
            <div style={{backgroundColor:this.state.color}}>
                <button onClick={() => {this.ChangeColor('yellow')}}>Yellow</button><br/>
                <button onClick={() => {this.ChangeColor('white')}}>White</button><br/>
                <button onClick={() => {this.ChangeColor('black')}}>Black</button><br/>
                <button onClick={() => {this.ChangeColor('red')}}>Red</button><br/>
                <button onClick={() => {this.ChangeColor('blue')}}>Blue</button><br/>
                <button onClick={() => {this.ChangeColor('green')}}>Green</button><br/>
                <button onClick={() => {this.ChangeColor('purple')}}>Purple</button><br/>
                <button onClick={() => {this.ChangeColor('pink')}}>Pink</button>
            </div>
        );
    }
}