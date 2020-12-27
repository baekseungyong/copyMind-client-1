import {GET_RANDOM_COPY} from '../actions'

const initialState = {
    viewCopy:{}
}

const viewCopyReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_RANDOM_COPY:
            return Object.assign({}, state, {viewCopy:action.copy})
        default:
            return state
    }
}


export default viewCopyReducer;

