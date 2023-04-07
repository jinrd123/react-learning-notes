import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction } from "../store/counter/actionCreator";
import store from "../store";

class Counter extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: store.getState().counter.counter,
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                counter: state.counter.counter
            })
        })
    }

    addNumber(num) {
        const { addNumber } = this.props;
        addNumber(num);
    }

    render() {
        const { counter } = this.state
        return (
            <div>
                <div>计数: {counter}</div>
                <button onClick={() => this.addNumber(10)}>点我加10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter.counter,
})

const mapDispatchToProps = (dispatch) => ({
    addNumber() {
        dispatch(addNumberAction(10));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);