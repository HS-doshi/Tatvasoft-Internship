import React from 'react'
import { Button } from "@material-ui/core"

const About = ({ name, fun }) => {
    return (
        <div>
            <h3>{name} is pursuing 3rd Year in GCET.</h3>
            <h4>I'm Heet Doshi! I love to do coding in react js.</h4>
            <Button onClick={fun} variant="contained" color="primary" endIcon={true}>Submit</Button>
            <h5>I likes playing cricket.</h5>
        </div>
    )
}
export default About
