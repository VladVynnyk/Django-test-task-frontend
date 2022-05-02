import React, {useEffect, useState} from 'react';
import classes from "../Form.module.css";
import SubmitButton from "../../../UI/Buttons/SubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {fetchGroups} from "../../../actions/ListsActions";
import {addUserAction} from "../../../actions/AddActions";
import {editUserAction} from "../../../actions/EditActions";
import {useParams} from "react-router";

const UserEditForm = () => {
    let {id} = useParams();
    let dispatch = useDispatch()
    const groupList = useSelector(state => state.groupList)
    const {groups, loading, error} = groupList

    const editUser = useSelector(state=>state.editUser)
    const {user, errors} = editUser
    useEffect(()=> {
            dispatch(fetchGroups())
        }, [dispatch])


    const [username, setUsername] = useState('')
    const [group, setGroup] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Submitted")
        dispatch(editUserAction(id, username, group))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Edit user</h1>
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

export default UserEditForm;