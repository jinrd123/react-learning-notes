import React from "react"
import HelloWorld from "./components/HelloWorld";
import ToStudy from "./components/ToStudy";
import UseRef from "./components/UseRef"
import Profile from "./components/profile/Profile";

import { FloatingButton, Item } from "./FloatingButton";
// import downloadIcon from "./assets/DOWNLOAD.svg";
// import forwardIcon from "./assets/FORWARD.svg";


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
                <FloatingButton>
                    <Item
                        imgSrc={downloadIcon}
                        onClick={() => {
                            console.log("callback function here");
                        }}
                    />
                    <Item
                        imgSrc={forwardIcon}
                        onClick={() => {
                            console.log("callback function here");
                        }}
                    />
                </FloatingButton>;
            </div>
        )
    }
}

export default App;