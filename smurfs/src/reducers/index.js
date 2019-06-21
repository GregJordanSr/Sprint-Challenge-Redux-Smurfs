
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

