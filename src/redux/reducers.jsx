import {
    SET_USER_LOGED,
    RETURN_ALL,
    GET_TOKEN
} from './actions'

const _INITIAL_STATE = []

export const UserReducer = (state = [], action) => {
    switch(action.type) {
        case SET_USER_LOGED:
            return [{...action.data}]
        default:
            return null
    }
}