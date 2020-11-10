import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab';
import { ArrowBackRounded, ArrowDownwardRounded, FilterHdrRounded, SubdirectoryArrowRightRounded } from '@material-ui/icons';
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
    titleIcon:{
        fontSize: "30px",
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
                            <Typography variant='h4' color="primary" className={classes.headerH4}>Experience</Typography>
                        </Box>
                        <Box component="div" className={classes.cardContainer}>
                            <Y3IPPCard/>
                        </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="textSecondary">
                            <ArrowBackRounded/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Typography component="span" variant='h4' color="primary" className={classes.headerH4}>The First Step</Typography>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                I started studying Computer Science at King's College London in 2018 with the following goals in mind:
                            </Typography>
                            <ul className={classes.ul}>
                                <li>
                                    <Typography variant='h5' color="primary" className={classes.journeyContent}>Meticulously understand fundamental concepts</Typography>
                                </li>
                                <li>
                                    <Typography variant='h5' color="primary" className={classes.journeyContent}>Recognise the path technology is taking</Typography>
                                </li>
                                <li>
                                    <Typography variant='h5' color="primary" className={classes.journeyContent}>Actively implement my own ideas uniting economics, technology and psychology</Typography>
                                </li>
                            </ul>
                            <Box component="div" className={classes.iconContainer}>
                                <ArrowDownwardRounded className={classes.icon}/>
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
                        <TimelineDot variant="outlined" color="textSecondary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Typography variant='h4' color="primary" className={classes.headerH4}>A Pivotal Moment</Typography>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                Realising from my peers,that  in order to achieve my goals I have to learn beyond my syllabus, I sought new avenues to learn from.
                            </Typography>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                I completed various online courses surrounding my field of study, attended events from leaders of industry and competed in hackathons.
                            </Typography>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                Applying these experiences into my solo and group projects, I began building up my skills and abilities.
                            </Typography>
                            <Box component="div" className={classes.iconContainer}>
                                <ArrowDownwardRounded className={classes.icon}/>
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
                        <TimelineDot variant="outlined" color="textSecondary"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Typography variant='h4' color="primary" className={classes.headerH4}>Insights Acquired</Typography>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                By June 2020, there were a number of occasions that yielded invaluable lessons to me.
                            </Typography>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                Upon reflecting on my AI project with my team, I found that we succeeded because each member embodied that: 
                            </Typography>
                            <ul className={classes.ul}>
                                <li>
                                    <Typography variant='h5' color="primary" className={classes.journeyContent}>One can tackle a tight deadline only if they possess sound fundamentals and set themselves clear summit to reach whilst remaining adaptable to change.</Typography>
                                </li>
                            </ul>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <WorkExpJACard/>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="textSecondary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.journeyContainer}>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                Leading my software development project showed that: 
                            </Typography>
                            <ul className={classes.ul}>
                                <li>
                                    <Typography variant='h5' color="primary" className={classes.journeyContent}>Handling client demands and team expectations requires concentrated planning with finesse in order to achieve great team morale, whilst ensuring the desired goal for the client is met.</Typography>
                                </li>
                            </ul>
                            <Box component="div" className={classes.iconContainer}>
                                <ArrowDownwardRounded className={classes.icon}/>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <WorkExpMcLarenCard/>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="textSecondary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box component="div" className={classes.subHContainer}>
                            <Typography component="span" variant='h4' color="primary" className={classes.headerH4}>The Next Step</Typography>
                        </Box>
                        <Box component="div" className={classes.journeyContainer}>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                It is now the tail end of 2020, I am on my Industrial Placement, experiencing more than I could have expected.
                            </Typography>
                            <Typography variant='h5' color="primary" className={classes.journeyContent}>
                                I have outlined all my work experience right of this passage, theres always more than meets the eye so I am happy to chat, feel free to get in touch. I will be adding to this as the journey progresses towards the summit.
                            </Typography>
                            <Box component="div" className={classes.iconContainer}>
                                <SubdirectoryArrowRightRounded className={classes.icon}/>
                            </Box>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="textSecondary">
                            <FilterHdrRounded/>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>

    );
};

export default TimelineComponent;