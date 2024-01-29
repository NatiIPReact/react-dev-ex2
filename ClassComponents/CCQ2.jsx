import { Component } from "react"

export default class CCQ2 extends Component {
    constructor(props) {
        super(props);
        this.firstName = '';
        this.lastName = '';
        this.psychometricGrade = 0;
        this.state = {
            showFirstNameMessage: 'none',
            showLastNameMessage: 'none',
            showGradeMessage: 'none',
        };
        this.gradeMessage = {text:"You've been accepted!", color:"green", display:"none"};
    }
    firstNameChanged = (e) => {
        this.firstName = e.target.value;
    };
    lastNameChanged = (e) => {
        this.lastName = e.target.value;
    };
    psychometricGradeChanged = (e) => {
        this.psychometricGrade = parseInt(e.target.value);
    };
    showFNameMessage = () => {this.setState({showFirstNameMessage: 'block'})};
    showLNameMessage = () => {this.setState({showLastNameMessage: 'block'})};
    showGradeMessage = () => {this.setState({showGradeMessage: 'block'})};
    hideFNameMessage = () => {this.setState({showFirstNameMessage: 'none'})};
    hideLNameMessage = () => {this.setState({showLastNameMessage: 'none'})};
    hideGradeMessage = () => {
        this.setState({showGradeMessage: 'none'});
        console.log(this.psychometricGrade);
        if (this.psychometricGrade != 0) {
            if (this.psychometricGrade > 555) {
                this.gradeMessage = {text:"You've been accepted!", color:"green", display:"block"};
            } else {
                this.gradeMessage = {text:"Try again next year :(", color:"red", display:"block"};
            }
        }
    };
    render() {
        return(
            <>
                <p style={{display:this.state.showFirstNameMessage, color:'red'}}>Please enter your first name</p>
                <span>First name: </span><input type="text" onChange={this.firstNameChanged} onFocus={this.showFNameMessage} onBlur={this.hideFNameMessage}/><br/>
                <p style={{display:this.state.showLastNameMessage, color:'red'}}>Please enter your last name</p>
                <span>Last name: </span><input type="text" onChange={this.lastNameChanged} onFocus={this.showLNameMessage} onBlur={this.hideLNameMessage}/><br/>
                <p style={{display:this.state.showGradeMessage, color:'red'}}>Please enter your psychometric grade</p>
                <span>Psychometric grade: </span><input type="number" onChange={this.psychometricGradeChanged} onFocus={this.showGradeMessage} onBlur={this.hideGradeMessage}/>
                <p style={{display:this.gradeMessage.display, color: this.gradeMessage.color}}>{this.gradeMessage.text}</p>
            </>
        );
    }
}