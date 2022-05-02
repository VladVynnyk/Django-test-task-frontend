import React, {useEffect, useState} from 'react';
import classes from "./Form.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchGroups} from "../../actions/ListsActions";
import {addUserAction} from "../../actions/AddActions";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import {useParams} from "react-router-dom";
import {editUserAction} from "../../actions/EditActions";

const UserForm = () => {
    let dispatch = useDispatch()
    const groupList = useSelector(state => state.groupList)
    const {groups, loading, error} = groupList

    const addNewUser = useSelector(state=>state.addUser)
    const {user, errors} = addNewUser
    useEffect(()=> {
            dispatch(fetchGroups())
        }, [dispatch])


    const [username, setUsername] = useState('')
    const [group, setGroup] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Submitted")
        dispatch(addUserAction(username, group))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Add new user</h1>
            <input type="text" placeholder={"Name of user"} className={classes.input} value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <br/>
            {groups.map(group => (
                <label className={classes.container} key={group.id}>
                <input type="radio" className={classes.checkbox} value={group.id} name={"radioButton"} onChange={(e) => setGroup(e.target.value)}/>
                    <span className={classes.checkmark}>{group.name}</span> <br/>
                </label>)
            )}
            <br/>
            <SubmitButton text={"Submit"}/>
        </form>
    );
};

export default UserForm;