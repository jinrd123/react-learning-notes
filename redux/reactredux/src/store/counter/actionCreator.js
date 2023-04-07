import * as actionTypes from "./constant";

export const addNumberAction = (num) => ({
    type: actionTypes.ADD_NUMBER,
    num,
})