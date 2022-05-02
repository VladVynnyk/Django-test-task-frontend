import {USER_REQUEST,
        USER_SUCCESS,
        USER_FAIL} from "../constants/EditReducers"

export const EditUserReducer = (state = {user:{}}, action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {loadings: true, ...state}
        case USER_SUCCESS:
            return {loadings: false, user: action.payload}
        case USER_FAIL:
            return {loadings: false, user: action.payload}
        default:
            return state
    }
}

export const EditGroupReducer = (state = {group:{}}, action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {loadings: true, ...state}
        case USER_SUCCESS:
            return {loadings: false, group: action.payload}
        case USER_FAIL:
            return {loadings: false, group: action.payload}
        default:
            return state
    }
}