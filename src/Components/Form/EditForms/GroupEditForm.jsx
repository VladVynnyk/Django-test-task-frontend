import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addGroupAction} from "../../../actions/AddActions";
import classes from "../Form.module.css";
import SubmitButton from "../../../UI/Buttons/SubmitButton";
import {useParams} from "react-router";
import {editGroupAction} from "../../../actions/EditActions";

const GroupEditForm = () => {
    let {id} = useParams();
    let dispatch = useDispatch()
    const editGroup = useSelector(state => state.editGroup)
    const {loading, group, errors} = editGroup

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Submitted")
        dispatch(editGroupAction(id, name, description))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Edit group</h1>
            <input type="text" placeholder={"Name of group"} className={classes.input} value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input type="text" placeholder={"Description"} className={classes.input} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <SubmitButton text={"Submit"}/>
        </form>
    );
};

export default GroupEditForm;