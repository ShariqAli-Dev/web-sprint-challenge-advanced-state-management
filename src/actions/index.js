import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const GOT_ERROR = 'GOT_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) => {
  axios
    .get('http://localhost:3333/smurfs')
    .then((res) => dispatch(gotSmurfs(res.data)))
    .catch((err) => dispatch(gotError(err.message)));
};

export const gotSmurfs = (response) => {
  return { type: GOT_SMURFS, payload: response };
};

export const gotError = (errorMessage) => {
  return { type: GOT_ERROR, payload: errorMessage };
};

export const addSmurf = (newSmurf) => {
  return {
    type: ADD_SMURF,
    payload: newSmurf,
  };
};

export const setError = (errorMessage) => {
  return { type: SET_ERROR, payload: errorMessage };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
