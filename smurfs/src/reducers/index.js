/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  POST_START,
  POST_SUCCESS,
  POST_ERROR,
} from '../actions/index';



 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   errorMessage: '',
   successMessage: '',
   error: null
 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, fetchingFriend: true };

    case FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, fetchSmurfs: false };
        
    case FETCH_ERROR:
      return { ...state, error: action.payload, fetchingSmurfs: false };
        
    case POST_START:
      return { ...state, addingSmurf: true, errorMessage: action.payload, successMessage: action.payload };
      
    case POST_SUCCESS:
      return { ...state, addingSmurf: false, errorMessage: action.payload, successMessage:action.payload};
        
    case POST_ERROR:
      return { ...state, addingSmurf: false, errorMessage: action.payload, successMessage: action.payload };
       
    default:
      return state;
  }
}

export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
