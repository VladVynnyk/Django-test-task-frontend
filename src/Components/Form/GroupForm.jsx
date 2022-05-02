import React, {useState} from 'react';
import classes from "./Form.module.css";
import SubmitButton from "../../UI/Buttons/SubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {addGroupAction} from "../../actions/AddActions";

const GroupForm = () => {
    let dispatch = useDispatch()
    const addGroup = useSelector(state => state.addGroup)
    const {group, errors} = addGroup

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("Submitted")
        dispatch(addGroupAction(name, description))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Add new group</h1>
            <input type="text" placeholder={"Name of group"} className={classes.input} value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input type="text" placeholder={"Description"} className={classes.input} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <SubmitButton text={"Submit"}/>
        </form>
    );
};

export default GroupForm;