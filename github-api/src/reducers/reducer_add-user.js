import { FETCH_USERS } from '../actions';

const initialState = {
    users: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                users: action.payload
            }
        default:
            return state;
    }
}