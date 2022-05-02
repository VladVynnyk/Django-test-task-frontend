import {ADD_USER_REQUEST,
        ADD_USER_SUCCESS,
        ADD_USER_FAIL,
        ADD_GROUP_REQUEST,
        ADD_GROUP_SUCCESS,
        ADD_GROUP_FAIL} from "../constants/AddConstants";
import axios from "axios";

export const addUserAction = (username, group) => async (dispatch) =>{
    try {
        dispatch({type:ADD_USER_REQUEST})
        let formData = new FormData();
        formData.append('username', username);
        formData.append('group', group);
        const {data} = await fetch('http://127.0.0.1:8000/api/users/add-user',
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
            type:ADD_USER_SUCCESS,
            payload:data
        })
    }
    catch(error)
    {
        dispatch({
            type:ADD_USER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const addGroupAction = (name, description) => async (dispatch) =>{
    try {
        dispatch({type:ADD_GROUP_REQUEST})
        let formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        const {data} = await fetch('http://127.0.0.1:8000/api/groups/add-group',
            {method: 'POST', body: formData})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                    // process success response
                }
                else {
                    // proccess server errors
                }
            })
        dispatch({
            type:ADD_GROUP_SUCCESS,
            payload:data
        })
    }
    catch(error)
    {
        dispatch({
            type:ADD_GROUP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}