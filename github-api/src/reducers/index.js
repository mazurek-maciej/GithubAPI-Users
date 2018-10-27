import { combineReducers } from 'redux';
import FetchUsers from './reducer_fetch-users';
import LoadingState from './reducer_loading';
import PageNumber from './reducer_page-number';

const rootReducer = combineReducers ({
    fetchUsers: FetchUsers,
    loadingState: LoadingState,
    pageNumber: PageNumber
});

export default rootReducer;