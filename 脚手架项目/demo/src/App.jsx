import React from "react"
import HelloWorld from "./components/HelloWorld";
import ToStudy from "./components/ToStudy";
import UseRef from "./components/UseRef"
import Profile from "./components/profile/Profile";

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
                <Profile/>
            </div>
        )
    }
}

export default App;