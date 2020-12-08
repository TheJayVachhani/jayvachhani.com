import React from 'react';
import {Grid, Typography, Box, Fade, Card, CardActions, Collapse, Divider, CardContent, IconButton, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ExpandMoreRounded} from '@material-ui/icons'
import clsx from 'clsx';

import ImageGrid from './ImageGrid.js';

const blogCSS = makeStyles((theme) => ({
    notesContainer:{
        width: "100%",
        margin: "3% auto 2% auto",
        overflow: "hidden"
    },
    title:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        fontSize: "3rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    subheading:{
        fontWeight: "400",
        letterSpacing: "1px",
        fontSize:"1.5rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    section:{
        width: "100%",
        padding: "0 0 15px 0"
    },
    postDate:{
        fontWeight: "400",
        fontSize:"1.5rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    sectionTitle:{
        fontWeight: "400",
        letterSpacing: "1px",
        fontSize:"2.5rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    postTitle:{
        fontWeight: "300",
        letterSpacing: "1px",
        fontSize:"2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    postDescription:{
        fontWeight: "400",
        lineHeight: "1.5rem" ,
        fontSize:"1.2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    details:{
        fontWeight: "300",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1.7rem",
        textAlign: "center"
    },
    icon:{
        fontSize: "35px"
    },
    postDescriptionCard:{
        padding: "0px 10px 0px 10px",
    },
    expand:{
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen:{
        transform: 'rotate(180deg)',
    },
}));

const BlogComponent = () => {
    const classes = blogCSS();

    const [open, setOpen] = React.useState({
        card1: false,
        card2: false,
        card3: false,
    });

    const handleExpandClick1 = () => {
        setOpen((open) =>({card1: !open.card1}));
    };
    const handleExpandClick2 = () => {
        setOpen((open) =>({card2: !open.card2}));
    };
    const handleExpandClick3 = () => {
        setOpen((open) =>({card3: !open.card3}));
    };

    return (
        <Box component="div" className={classes.notesContainer}>
            <Box component="div" className={classes.section}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Fade in={true} timeout={500} style={{transitionDelay: 500}}>
                        <Grid item xs={12}>
                            <Typography variant='h1' color="primary" className={classes.title}>My Blog</Typography>
                        </Grid>
                    </Fade>
                    <Fade in={true} timeout={500} style={{transitionDelay: 750}}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.subheading} color="secondary" align="center">
                                Overview of my self-learning. Lessons from my experiences.                               
                            </Typography>
                        </Grid>
                    </Fade>
                </Grid> 
            </Box>
            <Box component="div" className={classes.section}>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1000}}>
                        <Grid item xs={11}>
                            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="h1" color="primary" className={classes.sectionTitle}>
                                                Internships
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Typography variant="h2" color="secondary" className={classes.postDate}>
                                                Nov 2020
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} md={10}>
                                            <Link href="https://www.notion.so/Internship-Application-Tips-d20983ac1fd34e4196ecef413fb4b62c" target="_blank" rel="noreferrer">
                                                <Typography variant="h2" color="primary" className={classes.postTitle}>
                                                    Application Tips
                                                </Typography>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} md={10}>
                                            <Card className={classes.postDescriptionCard}>
                                                <CardActions disableSpacing>
                                                    <Typography variant="h6" color="primary" className={classes.details}>Description</Typography>
                                                    <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card3})} onClick={handleExpandClick3} aria-expanded={open.card3} aria-label="description">
                                                        <ExpandMoreRounded color="primary" className={classes.icon}/>
                                                    </IconButton>
                                                </CardActions>
                                                <Collapse className={classes.content} in={open.card3} timeout="auto" unmountOnExit>
                                                    <Grid container direction="row" justify="center" alignItems="center">
                                                        <Grid item xs={12}>
                                                            <CardContent>
                                                                <Typography variant="h6" color="textPrimary" className={classes.postDescription}>
                                                                    Since September I have made 36 different internship applications to firms for their 2021 summer programmes.
                                                                    I am glad to say that I received an offer from my first choice firm, I am now an Incoming Intern at UBS in their Investment Bank Chief Operating Office for 2021 Summer.
                                                                    I share in this document some ideas and strategies that I applied to stand out from the crowd.
                                                                </Typography>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                    <Divider variant="middle"/>
                                                </Collapse>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                        <Grid item xs={11}>
                            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="h1" color="primary" className={classes.sectionTitle}>
                                                Computer Science
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Typography variant="h2" color="secondary" className={classes.postDate}>
                                                Jun 2020
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} md={10}>
                                            <Link href="https://www.notion.so/JavaScript-cb2e58cf7c214090b8400ebd7c14847a" target="_blank" rel="noreferrer">
                                                <Typography variant="h2" color="primary" className={classes.postTitle}>
                                                    JavaScript Overview
                                                </Typography>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} md={10}>
                                            <Card className={classes.postDescriptionCard}>
                                                <CardActions disableSpacing>
                                                    <Typography variant="h6" color="primary" className={classes.details}>Description</Typography>
                                                    <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card1})} onClick={handleExpandClick1} aria-expanded={open.card1} aria-label="description">
                                                        <ExpandMoreRounded color="primary" className={classes.icon}/>
                                                    </IconButton>
                                                </CardActions>
                                                <Collapse className={classes.content} in={open.card1} timeout="auto" unmountOnExit>
                                                    <Grid container direction="row" justify="center" alignItems="center">
                                                        <Grid item xs={12}>
                                                            <CardContent>
                                                                <Typography variant="h6" color="textPrimary" className={classes.postDescription}>
                                                                    I wrote these notes whilst learning JavaScript from FreeCodeCamp.
                                                                    It has all the code and snippets needed to grasp JS if you are already familiar with programming languages like Java/Python. 
                                                                </Typography>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                    <Divider variant="middle"/>
                                                </Collapse>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1500}}>
                        <Grid item xs={11}>
                            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="h3" color="primary" className={classes.sectionTitle}>
                                                Economics
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Typography variant="h5" color="secondary" className={classes.postDate}>
                                                Jan 2021
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} md={10}>
                                            <Typography variant="h3" color="primary" className={classes.postTitle}>
                                                Market Concepts
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={10}>
                                            <Card className={classes.postDescriptionCard}>
                                                <CardActions disableSpacing>
                                                    <Typography variant="h6" color="primary" className={classes.details}>Description</Typography>
                                                    <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card2})} onClick={handleExpandClick2} aria-expanded={open.card2} aria-label="description">
                                                        <ExpandMoreRounded color="primary" className={classes.icon}/>
                                                    </IconButton>
                                                </CardActions>
                                                <Collapse className={classes.content} in={open.card2} timeout="auto" unmountOnExit>
                                                    <Grid container direction="row" justify="center" alignItems="center">
                                                        <Grid item xs={12}>
                                                            <CardContent>
                                                                <Typography variant="h6" color="textPrimary" className={classes.postDescription}>
                                                                    I am currently completing the Bloomberg Market Concepts course, alongside that I am producing a document with expanded examples with explanations that I will be using in my economic analyses from an investor's perspective.
                                                                </Typography>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                    <Divider variant="middle"/>
                                                </Collapse>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                </Grid>
            </Box>
            <Box component="div">
                <ImageGrid/>
            </Box>
        </Box>
    );
};

export default BlogComponent
