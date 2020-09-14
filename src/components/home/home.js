import React from 'react';
import {Typography, Box, Grid, IconButton, Card} from '@material-ui/core';
import {LinkedIn, DescriptionRounded} from '@material-ui/icons';
import Typed from 'react-typed';
import './home.css';

const HomeComponent = () => {
    return (
        <div>
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
                                <Typography variant='h5' color="textSecondary" align="left">Computer Science and Management Student at King's College London. </Typography>
                            </Grid>
                            <Grid item xs={11} md={4}>
                                <Typography variant='h5' color="textSecondary" align="left">Passionate about building and designing dynamic web applications & experiences. </Typography>
                            </Grid>
                        </Grid>
                        <Box component="div" className="icon-wrapper">
                            <Grid container justify="center" direction="row" alignItems="center">
                                <Grid item xs={4} md={1}>
                                    <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                        <LinkedIn color="secondary" style={{ fontSize: 35 }}/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} md={1}>
                                    <IconButton href="https://www.linkedin.com/in/thejayvachhani/" target="_blank">
                                        <DescriptionRounded color="secondary" style={{ fontSize: 35 }}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Box component="div" className="programming">
                <Grid container justify="center" direction="column" alignItems="stretch" spacing={1}>
                    <Grid item xs={12}>
                        <Box className="programming-console">
                            <Card>
                                <Box className="console-content">
                                    <ul>
                                        <li><Typography variant="body1" color="secondary">&lt;html&gt;</Typography></li>
                                        <li>
                                            <ul className="no-top-padding">
                                                <li>
                                                    <Typography component="span" variant="body1" color="secondary">&lt;h1&gt;</Typography>
                                                    <Typography component="span" variant="body1" color="textSecondary"> About Me </Typography>
                                                    <Typography component="span" variant="body1" color="secondary">&lt;/h1&gt;</Typography>
                                                </li>
                                                <li><Typography variant="body1" color="secondary">&lt;body&gt;</Typography></li>
                                                <li>
                                                    <ul className="no-top-padding">
                                                        <li>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;h2&gt;</Typography>
                                                            <Typography component="span" variant="body1" color="textSecondary"> I have trained to be: </Typography>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;/h2&gt;</Typography>
                                                        </li>
                                                        <li><Typography variant="h6" color="secondary">&lt;ul&gt;</Typography></li>
                                                        <ul className="no-top-padding">
                                                            <li>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> skilled in <Typed strings={["JS", "HTML", "CSS", "REACT", "Java", "PDDL"]} typeSpeed={105} backSpeed={80} loop/> </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                            <li>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> familiar with <Typed strings={["Python", "C++", "SQL", "Scala", "LateX",]} typeSpeed={105} backSpeed={80} loop/> </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                        </ul>
                                                        <li><Typography variant="body1" color="secondary">&lt;/ul&gt;</Typography></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="no-top-padding">
                                                        <li>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;h2&gt;</Typography>
                                                            <Typography component="span" variant="body1" color="textSecondary"> I am: </Typography>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;/h2&gt;</Typography>
                                                        </li>
                                                        <li><Typography variant="h6" color="secondary">&lt;ul&gt;</Typography></li>
                                                        <ul className="no-top-padding">
                                                            <li>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> Curious, Articulate & Versatile </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                            <li>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> An Avid Reader & Learner </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                            <li>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> Looking for a Summer 2021 Internship </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                        </ul>
                                                        <li><Typography variant="body1" color="secondary">&lt;/ul&gt;</Typography></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="no-top-padding">
                                                        <li>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;h2&gt;</Typography>
                                                            <Typography component="span" variant="body1" color="textSecondary"> I like: </Typography>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;/h2&gt;</Typography>
                                                        </li>
                                                        <li><Typography variant="h6" color="secondary">&lt;ul&gt;</Typography></li>
                                                        <ul className="no-top-padding">
                                                            <li>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> Motorsport, especially F1 </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                            <li>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> To Code, obviously </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                            <li>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;li&gt;</Typography>
                                                                <Typography component="span" variant="body1" color="textSecondary"> To Explore New Ideas </Typography>
                                                                <Typography component="span" variant="body1" color="secondary">&lt;/li&gt;</Typography>
                                                            </li>
                                                        </ul>
                                                        <li><Typography variant="body1" color="secondary">&lt;/ul&gt;</Typography></li>
                                                        <li>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;h1&gt;</Typography>
                                                            <ul className="no-top-padding">
                                                                <li>
                                                                    <Typography component="span" variant="body1" color="textSecondary"> Change the theme using the buttons </Typography>
                                                                </li>
                                                            </ul>
                                                            <Typography component="span" variant="body1" color="secondary">&lt;/h1&gt;</Typography>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><Typography variant="body1" color="secondary">&lt;/body&gt;</Typography></li>
                                            </ul>
                                        </li>
                                        <li><Typography variant="body1" color="secondary">&lt;/html&gt;</Typography></li>
                                    </ul>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default HomeComponent;