import {USER_LIST_REQUEST,
        USER_LIST_SUCCESS,
        USER_LIST_FAIL,
        GROUP_LIST_REQUEST,
        GROUP_LIST_SUCCESS,
        GROUP_LIST_FAIL} from "../constants/UserConstants"
import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
    try{
        dispatch({type:USER_LIST_REQUEST})
        const {data} = await axios.get('http://127.0.0.1:8000/api/users/all-users')
        dispatch({
            type:USER_LIST_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const fetchGroups = () => async (dispatch) => {
    try {
        dispatch({type:GROUP_LIST_REQUEST})
        const {data} = await axios.get('http://127.0.0.1:8000/api/groups/all-groups')
        dispatch({
            type: GROUP_LIST_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: GROUP_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}