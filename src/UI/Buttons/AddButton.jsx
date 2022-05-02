import React from 'react';
import classes from './addUserButton.module.css';
import {NavLink} from "react-router-dom";
const AddButton = ({to, text, type}) => {
    return (
       /* <button className={classes.button}>{text}</button>*/
        <NavLink to={to} className={type==="add" ? classes.button : classes.editButton}>{text}</NavLink>
    );
};

export default AddButton;