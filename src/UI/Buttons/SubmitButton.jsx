import React from 'react';
import classes from "./submitButton.module.css"
const SubmitButton = ({text}) => {
    return (
        <button type="submit" className={classes.button}>
            {text}
        </button>
    );
};

export default SubmitButton;