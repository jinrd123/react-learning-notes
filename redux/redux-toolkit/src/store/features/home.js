import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchHomeDataAction = createAsyncThunk("actionName", async (extraInfo, { dispatch, getState }) => {
    // 1.发送网络请求
    const res = await Promise.resolve(["banner1", "banner2", "banner3"]);
    // 2.取出数据，并在这里进行dispatch（可以不做），如果做的话async函数需要接收参数：async (extraInfo, { dispatch, getState }) => { ... }，extraInfo是组件内的传值
    dispatch(changeBanners(res));

    console.log("@@@");

    // 3.返回结果，action的状态变为fulfilled状态，对应就会执行extraReducers中的回调
    // return res;
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        banners: []
    },
    reducers: {
        changeBanners(state, { payload }) {
            state.banners = payload;
        }
    }
})

export const { changeBanners } = homeSlice.actions;

// 暴露counterSlice.reducer即可，这个对象在index.js中给configureStore函数使用
export default homeSlice.reducer;