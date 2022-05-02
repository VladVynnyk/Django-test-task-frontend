import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {groupListReducer, userListReducer} from "./reducers/UserGroupListReducers";
import {AddGroupReducer, AddUserReducer} from "./reducers/AddReducers";
import {EditGroupReducer, EditUserReducer} from "./reducers/EditReducers";


let reducer = combineReducers({
    userList:userListReducer,
    groupList:groupListReducer,
    addUser:AddUserReducer,
    addGroup: AddGroupReducer,
    editUser: EditUserReducer,
    editGroup: EditGroupReducer
})

const middleware=[thunk]

let initialState = {}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
