import React from 'react';
import classes from "./MyInpute.module.css";

const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;