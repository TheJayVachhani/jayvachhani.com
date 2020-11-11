import React from 'react';
import {Box, Grid, Typography, Hidden, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Y3IPPCard from './cards/Y3IPP.js';
import Y2SDPCard from './cards/Y2SDP.js';
import Y2AIPPCard from './cards/Y2AIPP.js';
import WorkExpJACard from './cards/WorkExpJA.js';
import WorkExpMcLarenCard from './cards/WorkExpMcLaren.js';
import TimelineComponent from './timeline.js';

const journeyCSS = makeStyles((theme) => ({
    experienceContainer:{
        width: "100%",
        margin: "3% auto 2% auto"
    }, 
    header:{
        padding: "0 0 15px 0"
    },
    headerH3:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    expCardContainer:{
        maxWidth: "500px",
        margin: "auto",
        overflow: "hidden"
    },
    body:{
        width: "100%"
    },
}));

const JourneyComponent = () => {
    const classes = journeyCSS();
    return (
        <Box component="div" className={classes.experienceContainer}>
            <Box component="div" className={classes.header}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Fade in={true} timeout={500} style={{transitionDelay: 500}}>
                        <Grid item xs={12}>
                            <Typography variant='h3' color="primary" className={classes.headerH3}>My Journey</Typography>
                        </Grid>
                    </Fade>
                </Grid>
            </Box>
            <Box component="div" className={classes.body}>
                <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Hidden mdDown>
                        <Grid item lg={10}>
                            <TimelineComponent/> 
                        </Grid>
                    </Hidden>
                    <Hidden lgUp>
                        <Grid item xs={12} lg={4}>
                            <Box component="div" className={classes.expCardContainer}>
                                <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                                    <Fade in={true} timeout={500} style={{transitionDelay: 1000}}>
                                        <Grid item xs={11}>
                                            <WorkExpMcLarenCard/>
                                        </Grid>
                                    </Fade>
                                    <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                                        <Grid item xs={11}>
                                            <WorkExpJACard/>
                                        </Grid>
                                    </Fade>
                                    <Fade in={true} timeout={500} style={{transitionDelay: 1500}}>
                                        <Grid item xs={11}>
                                            <Y2AIPPCard/>                                    
                                        </Grid>
                                    </Fade>
                                    <Fade in={true} timeout={500} style={{transitionDelay: 1750}}>
                                        <Grid item xs={11}>
                                            <Y2SDPCard/>
                                        </Grid>
                                    </Fade>
                                    <Fade in={true} timeout={500} style={{transitionDelay: 2000}}> 
                                        <Grid item xs={11}>
                                            <Y3IPPCard/>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Box>
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </Box>
    );  
};
export default JourneyComponent;