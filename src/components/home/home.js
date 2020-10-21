import React from 'react';
import {Typography, Box, Grid, IconButton, Card} from '@material-ui/core';
import {LinkedIn, DescriptionRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import Typed from 'react-typed';

const homeCSS = makeStyles((theme) => ({
    headerContainer:{
        position: "relative",
        margin: "auto",
        padding: "10vh 0 1vh 0",
        width: "95%"
    },
    header:{
        textAlign: "center",
    },
    headerH1: {
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: "3.5rem",
        letterSpacing: "0.05rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    },
    headerH2: {
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: "1.5rem",
        letterSpacing: "0.4rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    },
    headerH3: {
        textTransform: "capitalize",
        fontWeight: "300",
        fontSize: "1.3rem",
        letterSpacing: "0.01rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    },
    iconContainer:{
        width: "75%",
        position: "relative",
        margin: "auto",
        padding: "1vh 0 1vh 0"
    },
    icon:{
        fontSize: "35px"
    },
    programmingContainer:{
        position: "relative",
        maxWidth: "450px",
        minHeight: "650px",
        maxHeight: "700px",
        margin: "auto",
        padding: "0 5px 0 5px",
    },
    noTopPadding:{
        listStyle: "none",
        margin: "auto",
        padding: "0 0 0 12px"
    },
    ul:{
        listStyle: "none",
        padding: "0 20px 0 20px",
    },
    listHeader:{
        fontWeight: 300, 
        fontSize: 21
    },
    listSubheader:{
        fontWeight: 300, 
        fontSize: 18
    }
}));

const HomeComponent = () => {
    const classes = homeCSS();
    return (
        <div>
            <Box component="div" className={classes.headerContainer}>
                <Box component="div" className={classes.header}>
                    <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant='h1' color="textSecondary" className={classes.headerH1}>Hi, I'm Jay</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h2' color="textSecondary" className={classes.headerH2}>Web Developer</Typography>
                        </Grid>
                        <Grid container justify="center" direction="column" alignItems="center" spacing={1}>
                            <Grid item xs={11} md={6}>
                                <Typography variant='h3' color="textSecondary" align="left" className={classes.headerH3}>Computer Science and Management Student at King's College London,</Typography>
                            </Grid>
                            <Grid item xs={11} md={6}>
                                <Typography variant='h3' color="textSecondary" align="left" className={classes.headerH3}>building and designing dynamic web applications & experiences.</Typography>
                            </Grid>
                        </Grid>
                        <Box component="div" className={classes.iconContainer}>
                            <Grid container justify="center" direction="row" alignItems="center">
                                <Grid item xs={4} md={1}>
                                    <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                        <LinkedIn color="secondary" className={classes.icon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} md={1}>
                                    <IconButton href="/Jay-Vachhani-CV.pdf">
                                        <DescriptionRounded color="secondary" className={classes.icon}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Box component="div" className={classes.programmingContainer}>
                <Grid container justify="center" direction="column" alignItems="stretch" spacing={1}>
                    <Grid item xs={12}>
                        <Card>
                            <ul className={classes.ul}>
                                <li>
                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                    <Typography component="span" variant="body1" color="secondary">html</Typography>
                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                </li>
                                <li>
                                    <ul className={classes.noTopPadding}>
                                        <li>
                                            <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                            <Typography component="span" variant="body1" color="secondary">body</Typography>
                                            <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                        </li>
                                        <li>
                                            <ul className={classes.noTopPadding}>
                                            <li>
                                                <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                <Typography component="span" variant="body1" color="secondary">h1</Typography>
                                                <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                <Typography component="span" variant="h5" className={classes.listHeader} color="textSecondary"> About Me </Typography>
                                                <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                <Typography component="span" variant="body1" color="secondary">h1</Typography>
                                                <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                            </li>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">h2</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    <Typography component="span" variant="h6" className={classes.listSubheader} color="textSecondary"> I practice to be </Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">h2</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">ul</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                                <ul className={classes.noTopPadding}>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> skilled in <Typed strings={["JS", "HTML", "CSS", "REACT", "Java", "PDDL"]} typeSpeed={105} backSpeed={80} loop/> </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> familiar with <Typed strings={["Python", "C++", "SQL", "Scala", "LaTeX",]} typeSpeed={105} backSpeed={80} loop/> </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                </ul>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">ul</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className={classes.noTopPadding}>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">h2</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    <Typography component="span" variant="h6" className={classes.listSubheader} color="textSecondary"> I am </Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">h2</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">ul</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                                <ul className={classes.noTopPadding}>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> Curious, Articulate & Versatile </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> An Avid Reader & Learner </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> Looking for a Summer 2021 Internship </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                </ul>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">ul</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul className={classes.noTopPadding}>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">h2</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    <Typography component="span" variant="h6" className={classes.listSubheader} color="textSecondary"> I like </Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">h2</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">ul</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                                <ul className={classes.noTopPadding}>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> Motorsport, especially F1 </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> To solve problems </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                    <li>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        <Typography component="span" variant="body1" color="textSecondary"> Learning in a new way </Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                        <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                        <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                    </li>
                                                </ul>
                                                <li>
                                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                    <Typography component="span" variant="body1" color="secondary">ul</Typography>
                                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                            <Typography component="span" variant="body1" color="secondary">body</Typography>
                                            <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                    <Typography component="span" variant="body1" color="secondary">html</Typography>
                                    <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>                                        
                                </li>
                            </ul>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default HomeComponent;