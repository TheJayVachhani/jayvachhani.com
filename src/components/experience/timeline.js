import React from 'react';
import {Box, Typography, Slide, Fade} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab';
import {ArrowBackRounded, ArrowDownwardRounded, FiberManualRecordRounded, FilterHdrRounded, SubdirectoryArrowRightRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import Y3IPPCard from './cards/Y3IPP.js';
import Y2SDPCard from './cards/Y2SDP.js';
import Y2AIPPCard from './cards/Y2AIPP.js';
import WorkExpJACard from './cards/WorkExpJA.js';
import WorkExpMcLarenCard from './cards/WorkExpMcLaren.js';

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
    headerH4:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "1px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    subHContainer:{
        padding: "5px 0 5px 0",
        margin: "auto",
        textAlign: "center",
    },
    journeyContainer:{
        padding: "0 0 10px 0",
        margin: "auto",
    },
    journeyContent:{
        padding: "0 0 10px 0",
        textAlign: "left",
        fontWeight: "300",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1.5rem",
    },
    journeyBullet:{
        padding: "0 0 10px 25px",
        textAlign: "left",
        fontWeight: "300",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1.5rem",
    },
    cardContainer:{
        margin: "10px 0 10px 0"
    },
    iconContainer:{
        padding: "5px 0 0 0",
        margin: "auto",
        textAlign: "center",
    },
    icon:{
        fontSize: "35px"
    },
    timelineIcon:{
        fontSize: "15px",
    },
    ul:{
        listStyle: "circle outside none"
    },
}));

const TimelineComponent = () => {
    const classes = journeyCSS();
    return(
        <Box component="div">
            <Timeline align="right">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction="left" style={{transitionDelay: 1250}}>
                                <Typography variant='h4' color="primary" className={classes.headerH4}>Experience</Typography>
                            </Slide>
                        </Box>
                        <Box component="div" className={classes.cardContainer}>
                            <Y3IPPCard/>
                        </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 1000}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <ArrowBackRounded/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                            <TimelineConnector/>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1250}}>
                                <Typography variant='h4' color="primary" className={classes.headerH4}>The First Step</Typography>
                            </Slide>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1300}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    I started studying Computer Science at King's College London in 2018 with the following goals in mind:
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1350}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>Meticulously understand fundamental concepts</Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1400}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>Recognise the path technology is taking</Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1450}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>Actively implement my own ideas uniting economics, technology and psychology</Typography>
                            </Slide>
                            <Box component="div" className={classes.iconContainer}>
                                <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1500}}>
                                    <ArrowDownwardRounded className={classes.icon}/>
                                </Slide>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Box component="div" className={classes.cardContainer}>
                            <Y2SDPCard/>
                        </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 1500}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 1750}}>
                            <TimelineConnector/>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1750}}>
                                <Typography variant='h4' color="primary" className={classes.headerH4}>A Pivotal Moment</Typography>
                            </Slide>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1800}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    Realising from my peers, that  in order to achieve my goals I have to learn beyond my syllabus, I sought new avenues to learn from.
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1850}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>
                                    I completed various online courses surrounding my field of study, attended events from leaders of industry and competed in hackathons.
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1900}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    Applying these experiences into my solo and group projects, I began building up my skills and abilities.
                                </Typography>
                            </Slide>
                            <Box component="div" className={classes.iconContainer}>
                                <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2000}}>
                                    <ArrowDownwardRounded className={classes.icon}/>
                                </Slide>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Box component="div" className={classes.cardContainer}>
                            <Y2AIPPCard/>
                        </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 2000}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 2250}}>
                            <TimelineConnector/>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2250}}>
                                <Typography variant='h4' color="primary" className={classes.headerH4}>Insights Acquired</Typography>
                            </Slide>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2300}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    By June 2020, there were a number of occasions that yielded invaluable lessons to me.
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2350}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    Upon reflecting on my AI project with my team, I found that we succeeded because each member embodied that: 
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2450}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>
                                    One can tackle a tight deadline only if they possess sound fundamentals and set themselves a clear objective to reach whilst remaining adaptable to change.
                                </Typography>
                            </Slide>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <WorkExpJACard/>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 2500}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 2750}}>
                            <TimelineConnector/>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.journeyContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2750}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    Leading my software development project showed that: 
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2875}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>
                                    Handling client demands and team expectations requires concentrated planning with finesse in order to achieve great team morale, whilst ensuring the desired goal for the client is met.
                                </Typography>
                            </Slide>                            
                            <Box component="div" className={classes.iconContainer}>
                                <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 3000}}>
                                    <ArrowDownwardRounded className={classes.icon}/>
                                </Slide>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <WorkExpMcLarenCard/>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 3000}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 3250}}>
                            <TimelineConnector/>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 3250}}>
                                <Typography variant='h4' color="primary" className={classes.headerH4}>The Next Step</Typography>
                            </Slide>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 3300}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    It is now the tail end of 2020, I am on my Industrial Placement, experiencing more than I could have expected.
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 3350}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    I have outlined all my work experience right of this passage, theres always more than meets the eye so I am happy to chat, feel free to get in touch. I will be adding to this as the journey progresses towards the summit.
                                </Typography>
                            </Slide>
                            <Box component="div" className={classes.iconContainer}>
                                <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 3400}}>
                                    <SubdirectoryArrowRightRounded className={classes.icon}/>
                                </Slide>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 3500}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FilterHdrRounded/>
                            </TimelineDot>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>

    );
};

export default TimelineComponent;