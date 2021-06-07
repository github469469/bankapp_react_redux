import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

const initialState = {

  value:0
}

function counterReducer(state= initialState, action){
  switch(action.type){

    case "DECREMENT":

      return{
        value: state.value-1
      }
      case "INCREMENT":

      return{
        value: state.value+1
      }
      default:
        return state

  }

}


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
