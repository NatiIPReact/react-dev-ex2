import { Component } from "react"

export default class CCQ3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableWidth: '100%'
        };
    }
    setTableWidthToFiftyPercent = () => {
        this.setState({tableWidth:'50%'});
    };
    setTableWidthToAHundredPercent = () => {
        this.setState({tableWidth:'100%'});
    };
    render() {
        return(
            <table style={{width:this.state.tableWidth}} onClick={this.setTableWidthToFiftyPercent} onDoubleClick={this.setTableWidthToAHundredPercent}>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </table>
        );
    }
}