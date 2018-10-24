import { combineReducers } from 'redux';
import AddUser from './reducer_add-user';
import LoadingState from './reducer_loading';

const rootReducer = combineReducers ({
    addUser: AddUser,
    loadingState: LoadingState
});

export default rootReducer;