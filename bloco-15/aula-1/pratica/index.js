const Redux = require('redux');
import { combineReducers } from 'redux';


const login_action = {
    type:"LOGIN",
}

const initial_state = {
    login:false,
}


const reducer  = (state = initial_state, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                login: !state.login,
            }
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

console.log(store.getState())

store.dispatch(login_action);
console.log(store.getState());