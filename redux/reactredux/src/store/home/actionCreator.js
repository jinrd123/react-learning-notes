import * as actionTypes from "./constant";

export const changeBannersAction = (banners) => ({
    type: actionTypes.CHANGE_BANNERS,
    banners,
})

export const fetchHomeDataAction = () => {
    return function(dispatch, getState) {
        const banners = ["banner1", "banner2", "banner3"];
        console.log("通过网络请求获取服务端数据");
        dispatch(changeBannersAction(banners));
    }
}