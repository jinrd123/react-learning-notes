import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 888,
    },
    // reducers里的函数就相当于原生redux中reducer函数中switch中的一个case，只需要调用者里面的函数，即可完成对state的修改，而不用以派发action对象的形式
    // reducers对象会挂载到counterSlice.actions上
    reducers: {
        addNumber(state, { payload }) {
            state.counter = state.counter + payload
        }
    }
})

export const { addNumber } = counterSlice.actions;

// 暴露counterSlice.reducer即可，这个对象在index.js中给configureStore函数使用
export default counterSlice.reducer;