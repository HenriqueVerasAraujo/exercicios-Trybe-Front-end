const Redux = require('redux')
// import { createStore } from "redux";
// import { combineReducers } from "redux";

const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

const myReducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
        case 'NEXT_COLOR':
          return {
            ...state,
            index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
          };
        case 'PREVIOUS_COLOR':
          return {
            ...state,
            index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
          };
        default:
          return state;
      }
}

// const nextButtonClick = () => {
//     store.dispatch({type: "NEXT_COLOR"})
// }
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

document.getElementById('next').addEventListener('click', () => {
    // store.dispatch({ type: 'NEXT_COLOR' });
    console.log('x')
});
const store = Redux.createStore(myReducer);