import React, { PureComponent } from "react";
import { connect } from "react-redux";
import store from "../store";
import { addNumber } from "../store/features/counter";

class Counter extends PureComponent {

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
        const { counter } = this.props
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
    addNumber(num) {
        dispatch(addNumber(num));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);