import { LOADING } from '../actions';

const initialState = {
    isLoading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                isLoading: action.payload
            }
        default:
            return state;
    }
}