import React from 'react';
import {Grid, Typography, Box, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import ImageCarousel from './imageCarousel.js';
import CSPosts from './posts/CSPosts.js';
import GeneralPosts from './posts/GeneralPosts.js';
import BookPosts from './posts/BookPosts.js';

const blogCSS = makeStyles((theme) => ({
    notesContainer:{
        width: "100%",
        margin: "3% auto 2% auto",
        overflow: "hidden"
    },
    headerH3:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    notesH3:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    notesH4:{
        textTransform: "capitalize",
        fontWeight: "400",
        textAlign: "center",
        padding:"0 0 15px 0",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    notesH5:{
        fontWeight: "400",
        letterSpacing: "1px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    notesH6:{  
        fontWeight: "400",
        letterSpacing: "1px",
        fontSize: "1rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    section:{
        padding: "0 0 15px 0"
    },
    bodyContainer:{
        margin: "auto",
        width: "100%",
        textAlign: "center",
        paddingBottom: "1vh",
    },
    bodyHeader:{
        paddingBottom: "2vh"
    },
    bodyItem:{
        paddingBottom: "1vh"
    },
    accordionContainer:{
        width: "100%",
        margin: "auto",
        textAlign: "center",
        padding: "1vh 0 2vh 0",
    },
}))

const BlogComponent = () => {
    const classes = blogCSS();
    return (
        <Box component="div" className={classes.notesContainer}>
            <Box component="div" className={classes.section}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Fade in={true} timeout={500} style={{transitionDelay: 500}}>
                        <Grid item xs={12}>
                            <Typography variant='h3' color="primary" className={classes.headerH3}>My Blog</Typography>
                        </Grid>
                    </Fade>
                    <Fade in={true} timeout={500} style={{transitionDelay: 750}}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.notesH5} color="secondary">
                                I love to write about my learning, reflect on my reading and analyse interesting events.                               
                            </Typography>
                        </Grid>
                    </Fade>
                </Grid> 
            </Box>
                <Box component="div" className={classes.section}>
                    <Grid container direction="row" justify="center" spacing={3} alignItems="flex-start">
                        <Grid item xs={11} md={3}>
                            <CSPosts/>
                        </Grid>
                        <Grid item xs={11} md={3}>
                            <GeneralPosts/>
                        </Grid>
                        <Grid item xs={11} md={3}>
                            <BookPosts/>
                        </Grid>
                    </Grid>
                </Box>
            <Box component="div">
                <ImageCarousel/>
            </Box>
        </Box>
    )
}

export default BlogComponent
