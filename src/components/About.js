import React, { useEffect, useState } from 'react'
import { Button, Typography, makeStyles } from "@material-ui/core"

const AboutStyle = makeStyles((theme) => ({
    wrapper: {
        fontSize: 24,
        // color: theme.palette.primary.main,
    },
}));
const About = ({ name, fun }) => {

    // useState always use in function not outside function...
    const classes = AboutStyle();
    const [age, setAge] = useState(0);
    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    const changeAge = () => {
        setAge(age + 1)
    }
    const changeReset = () => {
        setAge(0)
    }
    const changeDecrement = () => {
        setAge(age - 1)
    }

    useEffect(() => {
        // alert("Age is updated!")
        if (value.length < 10) {
            setError("Value length must be more than 10");
        }
        else {
            setError("");
        }
    }, [value]);
    // 2nd array is dependency is for when we want update whne changes of our variable value.

    return (
        <div>
            <Typography component="h2" className='abc' >{name} is pursuing 3rd Year in GCET.</ Typography>
            <h4 className={classes.wrapper}>I'm Heet Doshi! I love to do coding in react js.</h4>
            <p>Age : {age}</p>
            <Button onClick={changeAge} variant="contained" color="primary" type='submit' >
                Click me For Increment</Button>
            <Button onClick={changeReset} variant='contained' color='secondary' style={{ padding: "10px" }}>Reset</Button>
            <Button onClick={changeDecrement} variant='contained' color='primary' padding="10px">Click me for Decrement</Button>
            <br />
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            {<p>Error is : {error && error}</p>}
        </div>
    );
};
export default About
