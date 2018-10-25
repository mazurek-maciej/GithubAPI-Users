import { combineReducers } from 'redux';
import AddUser from './reducer_add-user';
import LoadingState from './reducer_loading';
import PageNumber from './reducer_page-number';

const rootReducer = combineReducers ({
    addUser: AddUser,
    loadingState: LoadingState,
    pageNumber: PageNumber
});

export default rootReducer;