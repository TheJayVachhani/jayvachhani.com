import React from 'react';
import {Box, Typography, Slide, Fade} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';
import {ArrowDownwardRounded, FiberManualRecordRounded, FilterHdrRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const mobileTimelineCSS = makeStyles((theme) => ({
    timelineH4:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "1px",
        fontSize: "1.5rem",
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
        fontSize: "1.0rem",
    },
    journeyBullet:{
        padding: "0 0 10px 25px",
        textAlign: "left",
        fontWeight: "300",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1.0rem",
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
        fontSize: "10px",
    },
    contentAlign:{
        flex: "100%"
    }
}));

const MobileTimelineComponent = () => {
    const classes = mobileTimelineCSS();
    return(
        <Box component="div">
            <Timeline align="right">
                <TimelineItem>
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 1000}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                            <TimelineConnector/>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent className={classes.contentAlign}>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1250}}>
                                <Typography variant='h4' color="primary" className={classes.timelineH4}>The First Step</Typography>
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
                    <TimelineContent className={classes.contentAlign}>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 1750}}>
                                <Typography variant='h4' color="primary" className={classes.timelineH4}>A Pivotal Moment</Typography>
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
                    <TimelineContent className={classes.contentAlign}>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2250}}>
                                <Typography variant='h4' color="primary" className={classes.timelineH4}>Insights Acquired</Typography>
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
                    <TimelineContent className={classes.contentAlign}>
                        <Box component="div" className={classes.journeyContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2750}}>
                                <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                    Whilst leading my software development project, after each client meeting we would organise the key points on a whiteboard to visualise the road ahead, this showed us that:
                                </Typography>
                            </Slide>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 2875}}>
                                <Typography variant='h5' color="primary" className={classes.journeyBullet}>
                                    Handling client demands requires concentrated planning with finesse in order to organise effectively and achieve great team morale, an essential step towards meeting expectations.
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
                    <TimelineSeparator>
                        <Fade in={true} timeout={500} style={{transitionDelay: 3000}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 3250}}>
                            <TimelineConnector/>
                        </Fade>
                        <Fade in={true} timeout={500} style={{transitionDelay: 3500}}>
                            <TimelineDot variant="outlined" color="secondary">
                                <FiberManualRecordRounded className={classes.timelineIcon}/>
                            </TimelineDot>
                        </Fade>
                    </TimelineSeparator>
                    <TimelineContent className={classes.contentAlign}>
                        <Box component="div" className={classes.subHContainer}>
                            <Slide in={true} timeout={500} direction='right' style={{transitionDelay: 3250}}>
                                <Typography variant='h4' color="primary" className={classes.timelineH4}>The Next Step</Typography>
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
                                    <FilterHdrRounded className={classes.icon}/>
                                </Slide>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>

    );
};

export default MobileTimelineComponent;