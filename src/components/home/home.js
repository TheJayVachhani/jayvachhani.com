import React from 'react';
import {Typography, Box, Grid, IconButton} from '@material-ui/core';
import {LinkedIn} from '@material-ui/icons';
import Typed from 'react-typed';
import './home.css';

const HomeComponent = () => {
    return (
        <Box component="div" className="header-wrapper" >
            <Box component="div" className="header">
                <Grid container justify="center" direction="column" alignItems="center">
                    <Grid item xs={11}>
                        <Typography variant='h3' color="primary">Jay Vachhani</Typography>
                        <Typography variant='h5' color="primary">
                            Computer Science and Management
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid container justify="center" direction="column" alignItems="center">
                        <Grid item xs={12} align="center">
                            <Typography variant='h6' color="secondary">
                                <Typed strings={["Web Development","UI + UX Design", "Full Stack Learner", "Data Science", "Financial Markets", "AI + ML Learner",]} typeSpeed={30} backSpeed={30} loop/>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant='h6' color="secondary">
                                <Typed strings={["JavaScript", "HTML + CSS", "REACT","Python", "SQL", "Java", "Scala", "C++", "PDDL", "LaTeX"]} typeSpeed={50} backSpeed={50} loop/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Box component="div" className="icon-wrapper">
                        <Grid container justify="center" direction="row" spacing={2} alignItems="center">
                            <Grid item xs={12} lg={12}>
                                <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                    <LinkedIn color="secondary" style={{ fontSize: 35 }}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeComponent;