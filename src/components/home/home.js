import React from 'react';
import {Typography, Box, Grid, IconButton, Tooltip, Fade, Hidden} from '@material-ui/core';
import {LinkedIn, DescriptionRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import FauxCode from './fauxCode.js';

const homeCSS = makeStyles((theme) => ({
    content:{
        width: "100%",
        margin: "3% auto 0 auto",
        paddingBottom: "20px",
        overflow: "hidden"
    },
    mobileContent:{
        width: "95%",
        textAlign: "center",
    },
    mobileH1:{
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: "3.5rem",
        letterSpacing: "0.05rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    mobileH2:{
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: "1.2rem",
        letterSpacing: "0.02rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    mobileH3:{
        fontWeight: "300",
        fontSize: "1.1rem",
        letterSpacing: "0.01rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    mobileIconContainer:{
        width: "75%",
        position: "relative",
        margin: "auto",
        padding: "1vh 0 1vh 0"
    },
    webH1:{
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: "6.5rem",
        letterSpacing: "0.03rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    webH2: {
        textTransform: "uppercase",
        fontWeight: "400",
        fontSize: "2.0rem",
        letterSpacing: "0.2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    webH3: {
        fontWeight: "300",
        fontSize: "1.6rem",
        letterSpacing: "0.01rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    webIcon:{
        fontSize: "40px",
    },
    icon:{
        fontSize: "35px",
    },
}));

const HomeComponent = () => {
    const classes = homeCSS();
    return (
        <Box component="div" className={classes.content}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={0}>
                <Hidden mdDown>
                    <Grid item lg={6}>
                        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2}>
                            <Fade in={true} timeout={1000} style={{transitionDelay: 500}}>
                                <Grid item xs={12}>
                                    <Typography variant='h1' color="textSecondary" className={classes.webH1}>Hi, I'm Jay</Typography>
                                </Grid>
                            </Fade>
                            <Grid item xs={12}>                                    
                                <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                                    <Fade in={true} timeout={1000} style={{transitionDelay: 1500}}>
                                        <Grid item xs={9}>
                                            <Typography variant='h3' color="textSecondary" align="left" className={classes.webH3}>I'm a Final Year Computer Science and Management Student at King's College London.</Typography>
                                        </Grid>
                                    </Fade>
                                    <Fade in={true} timeout={1000} style={{transitionDelay: 2500}}>
                                        <Grid item xs={9}>
                                            <Typography variant='h3' color="textSecondary" align="left" className={classes.webH3}>I love working on new ideas, currently I'm building my skills in AI and Machine Learning.</Typography>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Fade in={true} timeout={750} style={{transitionDelay: 4000}}>
                                    <Typography variant='h2' component="span" color="textSecondary" className={classes.webH2}>Curious</Typography>
                                </Fade>
                                <Fade in={true} timeout={750} style={{transitionDelay: 4500}}>
                                    <Typography variant='h2' component="span" color="textSecondary" className={classes.webH2}> Articulate </Typography>
                                </Fade>
                                <Fade in={true} timeout={750} style={{transitionDelay: 5000}}>
                                    <Typography variant='h2' component="span" color="textSecondary" className={classes.webH2}>Versatile</Typography>
                                </Fade>                                    
                            </Grid>
                            <Grid item xs={12}>
                                <Fade in={true} timeout={500} style={{transitionDelay: 6000}}>
                                    <Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">LinkedIn</Typography>} placement="left">
                                        <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank" rel="noreferrer">
                                            <LinkedIn color="secondary" className={classes.webIcon}/>
                                        </IconButton>
                                    </Tooltip>
                                </Fade>
                                <Fade in={true} timeout={500} style={{transitionDelay: 6500}}>
                                    <Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">Resume/CV</Typography>} placement="right">
                                        <IconButton href="/Jay-Vachhani-CV.pdf">
                                            <DescriptionRounded color="secondary" className={classes.webIcon}/>
                                        </IconButton>
                                    </Tooltip>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={6}>
                    <Box component="div" className={classes.mobileContent}>
                        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2}>
                            <Hidden lgUp>
                                <Fade in={true} timeout={1000} style={{transitionDelay: 500}}>
                                    <Grid item xs={12}>
                                        <Typography variant='h1' color="textSecondary" align="center" className={classes.mobileH1}>Hi, I'm Jay</Typography>
                                    </Grid>
                                </Fade>
                                <Grid item xs={12}>
                                    <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
                                        <Fade in={true} timeout={1000} style={{transitionDelay: 1500}}>
                                            <Grid item xs={11}>
                                                <Typography variant='h3' color="textSecondary" align="left" className={classes.mobileH3}>I'm a Computer Science and Management Student at King's College London.</Typography>
                                            </Grid>
                                        </Fade>
                                        <Fade in={true} timeout={1000} style={{transitionDelay: 2500}}>
                                            <Grid item xs={11}>
                                                <Typography variant='h3' color="textSecondary" align="left" className={classes.mobileH3}>I love working on new ideas, currently I'm designing and building dynamic web applications.</Typography>
                                            </Grid>
                                        </Fade>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Fade in={true} timeout={750} style={{transitionDelay: 4000}}>
                                        <Typography variant='h2' component="span" color="textSecondary" className={classes.mobileH2}>Curious </Typography>
                                    </Fade>
                                    <Fade in={true} timeout={750} style={{transitionDelay: 4500}}>
                                        <Typography variant='h2' component="span" color="textSecondary" className={classes.mobileH2}> Articulate </Typography>
                                    </Fade>
                                    <Fade in={true} timeout={750} style={{transitionDelay: 5000}}>
                                        <Typography variant='h2' component="span" color="textSecondary" className={classes.mobileH2}> Versatile</Typography>
                                    </Fade> 
                                </Grid>
                                <Box component="div" className={classes.mobileIconContainer}>
                                    <Grid container justify="center" direction="row" alignItems="center">
                                        <Fade in={true} timeout={500} style={{transitionDelay: 6000}}>
                                            <Grid item xs={4} md={1}>
                                                <Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">LinkedIn</Typography>} placement="left">
                                                    <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank" rel="noreferrer">
                                                        <LinkedIn color="secondary" className={classes.icon}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>
                                        </Fade>
                                        <Fade in={true} timeout={500} style={{transitionDelay: 6500}}>
                                            <Grid item xs={4} md={1}>
                                                <Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">Resume/CV</Typography>} placement="right">
                                                    <IconButton href="/Jay-Vachhani-CV.pdf"target="_blank" rel="noreferrer">
                                                        <DescriptionRounded color="secondary" className={classes.icon}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>
                                        </Fade>
                                    </Grid>
                                </Box>
                            </Hidden>
                        </Grid>
                    </Box>
                    <FauxCode/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomeComponent;