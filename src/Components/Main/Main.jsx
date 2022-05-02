import React from 'react';
import classes from "./Main.module.css";
import {NavLink} from "react-router-dom";
const Main = () => {
    return (
        <div>
            <div className={classes.tab}>
                <div className={classes.buttonContainer}>
                    <NavLink className={classes.button} to="/users">Users</NavLink>
                    <NavLink className={classes.button} to="/groups">Groups</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Main;