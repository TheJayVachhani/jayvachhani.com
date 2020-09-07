import React from 'react';
import {Typography, Box, Grid,} from '@material-ui/core';
import {makeStyles} from'@material-ui/core/styles';
import Typed from 'react-typed';
import './home.css';

const HomeComponent = () => {
    return (
        <Box component="div" className="header-wrapper" >
            <Box component="div" className="header">
                <Grid container justify="center" direction="column">
                    <Grid item xs={12}>
                        <Typography variant='h3' color="primary">Jay Vachhani</Typography>
                        <Typography variant='h6' color="primary">
                            Computer Science and Management
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid container justify="center" direction="column" >
                        <Grid item xs={12} align="center">
                            <Typography variant='h6' color="secondary">
                                <Typed strings={["Web Development", "Full Stack Learner", "Data Science", "Financial Markets", "AI + ML Learner",]} typeSpeed={30} backSpeed={30} loop/>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant='h6' color="secondary">
                                <Typed strings={["JavaScript", "HTML + CSS", "REACT","Python", "SQL", "Java", "Scala", "C++", "PDDL", "LaTeX"]} typeSpeed={50} backSpeed={50} loop/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeComponent;