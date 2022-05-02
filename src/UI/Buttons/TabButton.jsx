import React from 'react';
import classes from './tabButton.module.css'
const TabButton = ({text}) => {
    return (
        <button className={classes.button}>
            {text}
        </button>
    );
};

export default TabButton;