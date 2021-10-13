import React from 'react';
import {Typography, Box, Grid, Card, Slide} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typed from 'react-typed';

const codeCSS = makeStyles((theme) => ({
    programmingContainer:{
        maxWidth: "450px",
        maxHeight: "550px",
        margin: "auto",
        padding: "0 5px 0 5px",
    },
    card:{
       height: "520px", 
       margin: "25px 0 0 0"
    },
    noTopPadding:{
        listStyle: "none",
        margin: "auto",
        padding: "0 0 0 20px"
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
    },
}));


const FauxCode = () => {
    const classes = codeCSS();
    return (
        <Box component="div">
            <Slide in={true} timeout={1250} direction="left" style={{transitionDelay: 7000}}>
                <Box component="div" className={classes.programmingContainer}>
                    <Grid container justify="center" direction="column" alignItems="stretch" spacing={1}>
                        <Grid item xs={12}>
                            <Card className={classes.card}>
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
                                                            <Typography component="span" variant="body1" color="textSecondary"> Avid Reader & Listener </Typography>
                                                            <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                            <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                            <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        </li>
                                                        <li>
                                                            <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                            <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                            <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                            <Typography component="span" variant="body1" color="textSecondary"> Proactive & Dependable </Typography>
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
                                                        <Typography component="span" variant="h6" className={classes.listSubheader} color="textSecondary"> Interested in </Typography>
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
                                                            <Typography component="span" variant="body1" color="textSecondary"> Economics & Technology </Typography>
                                                            <Typography component="span" variant="body1" color="textPrimary">&lt;/</Typography>
                                                            <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                            <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                        </li>
                                                        <li>
                                                            <Typography component="span" variant="body1" color="textPrimary">&lt;</Typography>
                                                            <Typography component="span" variant="body1" color="secondary">li</Typography>
                                                            <Typography component="span" variant="body1" color="textPrimary">&gt;</Typography>
                                                            <Typography component="span" variant="body1" color="textSecondary"> Big Data & AI Machine Learning </Typography>
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
            </Slide>
        </Box>
    );
};

export default FauxCode;
