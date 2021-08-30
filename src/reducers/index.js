import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GOT_SMURFS, GOT_ERROR, ADD_SMURF, SET_ERROR } from '../actions';

export const initialState = {
  smurfs: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SMURFS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
      };
    case GOT_ERROR:
      console.log(state.error);
      return state;
    case ADD_SMURF:
      console.log(action.payload);
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    case SET_ERROR:
      console.log('set error being called');
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
