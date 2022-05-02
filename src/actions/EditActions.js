import {USER_REQUEST,
        USER_SUCCESS,
        USER_FAIL} from "../constants/EditReducers"
import axios from "axios";

export const editUserAction = (id, username, group) => async (dispatch) => {
    try{
        dispatch({type: USER_REQUEST})
        let formData = new FormData();
        formData.append('username', username);
        formData.append('group', group);
        const {data} = await fetch(`http://127.0.0.1:8000/api/users/edit-user/${id}/`,
            {method: 'POST', body: formData})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                   console.log("Success: ", data.success)
                }
                else {
                    // proccess server errors
                }
            })
        dispatch({
            type: USER_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: USER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const editGroupAction = (id, name, description) => async (dispatch) => {
    try{
        dispatch({type: USER_REQUEST})
        let formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        const {data} = await fetch(`http://127.0.0.1:8000/api/groups/edit-group/${id}/`,
            {method: 'POST', body: formData})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                   console.log("Success: ", data.success)
                }
                else {
                    // proccess server errors
                }
            })
        dispatch({
            type: USER_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: USER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}