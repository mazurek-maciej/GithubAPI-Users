import { PAGE_PLUS, PAGE_MINUS } from '../actions';

const initialState = {
    pageNr: 1
}

const increment = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_PLUS:
            return {
                pageNr: state.pageNr + 1
            }
        case PAGE_MINUS:
            return {
                pageNr: state.pageNr - 1
            }
        default: 
            return state
    }
}

export default increment;