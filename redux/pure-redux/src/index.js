const store = require("./store");
const { addAgeAction, changeNameAction } = require("./store/actionCreators");

const state = store.getState();
console.log(state); // { name: 'jrd', age: 100 }

const unsubscribe = store.subscribe(() => {
    console.log("监听到store存储的state发生改变");
})

store.dispatch(addAgeAction(1)); // 监听到store存储的state发生改变

console.log(state); // { name: 'jrd', age: 100 }
console.log(store.getState()); // { name: 'jrd', age: 101 }

unsubscribe();

store.dispatch(changeNameAction("jinrd"));
console.log(store.getState()); // { name: 'jinrd', age: 101 }