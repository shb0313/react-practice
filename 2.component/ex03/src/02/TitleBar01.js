import React, {Component} from 'react';

export default class TitleBar01 extends Component {

    constructor(props) {
        super(props);
        
        // this.no vs this.state.no
        this.no = 0;
        this.state = {
            no: 0
        }
    }
    
    onClickHandler() {
        this.no++;
        console.log(`TitleBar01 Clicked: ${this.no}`);
        
        this.setState({
            no: this.state.no + 1
        })
        console.log(`TitleBar01 Clicked: ${this.state.no}`);
    }

    render() {
        return (
            <div>
                <h1
                    onClick={this.onClickHandler.bind(this)}
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    Function Handler
                    <br/>
                    {
                        // this.no vs this.state.no
                        `${this.no} vs ${this.state.no}`
                    }
                </h1>
            </div>
        )
    }
}