import React from 'react';
import {Typography, Box, Grid, IconButton} from '@material-ui/core';
import {LinkedIn, DescriptionRounded} from '@material-ui/icons';
import './home.css';

const HomeComponent = () => {
    return (
        <Box component="div" className="header-wrapper" >
            <Box component="div" className="header">
                <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant='h1' color="textSecondary">Hi, I'm Jay</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h3' color="textSecondary">Web Developer</Typography>
                    </Grid>
                    <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
                        <Grid item xs={11} md={4}>
                            <Typography variant='h5' color="textSecondary" align="left">A Computer Science and Management Student at King's College London. </Typography>
                        </Grid>
                        <Grid item xs={11} md={4}>
                            <Typography variant='h5' color="textSecondary" align="left">I'm currently working as a Software Developer, building and designing dynamic web applications & experiences. </Typography>
                        </Grid>
                    </Grid>
                    <Box component="div" className="icon-wrapper">
                        <Grid container justify="center" direction="row" spacing={2} alignItems="center">
                            <Grid item xs={6} md={1}>
                                <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                    <LinkedIn color="secondary" style={{ fontSize: 35 }}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} md={1}>
                                <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                    <DescriptionRounded color="secondary" style={{ fontSize: 35 }}/>
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