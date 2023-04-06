const { ADD_AGE, CHANGE_NAME } = require("./constant");

const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    name,
})

const addAgeAction = (age) => ({
    type: ADD_AGE,
    age,
})

module.exports = {
    changeNameAction,
    addAgeAction
}