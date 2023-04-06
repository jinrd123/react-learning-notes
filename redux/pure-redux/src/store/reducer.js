const { ADD_AGE, CHANGE_NAME } = require("./constant");

const initialState = {
    name: "jrd",
    age: 100,
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name };
        case ADD_AGE:
            return { ...state, age: state.age + action.age };
        default: 
            return state;
    }
}

module.exports = reducer;