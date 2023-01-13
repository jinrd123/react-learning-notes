import React from "react"
import HelloWorld from "./components/HelloWorld";
import ToStudy from "./components/ToStudy";
import UseRef from "./components/UseRef"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Hello React",
            inputValue: "input value",
        }
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        const { message, inputValue } = this.state;
        return (
            <div>
                <h2>{message}</h2>
                <HelloWorld/>
                <ToStudy propname="hhh">
                    <div>inToStudy</div>
                    <div>inToStudy2</div>
                </ToStudy>
                <input value={inputValue} onChange={(e) =>{this.inputChange(e)}}/>
                <UseRef/>
            </div>
        )
    }
}

export default App;