import {ADD_USER_REQUEST,
        ADD_USER_SUCCESS,
        ADD_USER_FAIL,
        ADD_GROUP_REQUEST,
        ADD_GROUP_SUCCESS,
        ADD_GROUP_FAIL} from "../constants/AddConstants";


export const AddUserReducer = (state={}, action) => {
    switch(action.type){
        case ADD_USER_REQUEST:
            return {loading:true}
        case ADD_USER_SUCCESS:
            return {loading:false, user: action.payload}
        case ADD_USER_FAIL:
            return {loading:false, errors: action.payload}
        default:
            return state
    }
}

export const AddGroupReducer = (state={}, action) => {
    switch(action.type){
        case ADD_GROUP_REQUEST:
            return {loading:true}
        case ADD_GROUP_SUCCESS:
            return {loading:false, group: action.payload}
        case ADD_GROUP_FAIL:
            return {loading:false, errors: action.payload}
        default:
            return state
    }
}

