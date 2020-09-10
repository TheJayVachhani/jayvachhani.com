import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Grid, Card, CardHeader, Typography, Button, MobileStepper, Box} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab'; 
import {KeyboardArrowLeftRounded, KeyboardArrowRightRounded} from '@material-ui/icons';

import BoliviaSalt from './images/Bolivia-Salt-Flats.png';
import BoliviaRail from './images/Bolivia-Abandoned-Railway.png';
import BoliviaAmz from './images/Bolivia-Amazon.png';
import BoliviaMnT from './images/Bolivia-MtTarija.png';
import GermanySpeyer from './images/Speyer-Quiet-Street.png';
import SwissGlacier from './images/Zermatt-Glacier.png';
import SwissLodge from './images/Zermatt-Lodge.png';
import './about.css';

const AutoPlayViews = SwipeableViews;


const imageCarousel = [
    {
        label: 'Switzerland - Lodge in Zermatt',
        imgPath: SwissLodge ,
    },
    {
        label: 'Switzerland - Zermatt Glacier',
        imgPath: SwissGlacier ,
    },
    {
        label: 'Germany - Speyer',
        imgPath: GermanySpeyer ,
    },
    {
        label: 'Bolivia - Condoriri',
        imgPath: BoliviaMnT ,
    },
    {
        label: 'Bolivia - Rurrenabaque',
        imgPath: BoliviaAmz ,
    },
    {
        label: 'Bolivia - Uyuni Railway ',
        imgPath: BoliviaRail ,
    },
    {
        label: 'Bolivia - Salar de Uyuni',
        imgPath: BoliviaSalt ,
    },
]

const AboutComponent = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imageCarousel.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box component="div" className="about-wrapper">
            <Box component="div" className="about">
                <Box component="div" className="about-header">
                    <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                        <Grid item xs={12} md={10}>
                            <Typography variant="h3" color="primary">
                                I'm Jay.
                            </Typography>
                            <Typography variant="h5">
                                Computer Science and Management student at King's College London. 
                            </Typography>
                            <Typography variant="h5">
                                Currently working as a Software Developer for my Year in Industry.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box component="div" className="about-body">
                    <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                        <Grid item xs={12} md={10}>
                            <Typography color="primary" variant="h4">
                                I'm New To This.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={1} direction="column" alignItems="stretch" >
                        <Grid item xs={12}>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="h6" color="primary">
                                            My first line of code was written at the beginning of university. A journey into the unknown became a more familiar one.
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary"/>
                                        <TimelineConnector style={{backgroundColor: theme.palette.secondary.main }}/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card>
                                            <CardHeader
                                                title={<Typography variant="h5" color="primary">Elegant Minimalist Design.</Typography>} align="center"
                                                subheader={<Typography variant="h6" color="secondary">Steadfast Ethos for this Site</Typography>}
                                            />
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="h6" color="primary">
                                            Endeavoring to construct new human-computer interactions,    
                                        </Typography>
                                        <Typography variant="h6" color="primary">
                                            I've begun immersion into the world of MOOCs, tapping into the vast set of resources to grow my skills.    
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary"/>
                                        <TimelineConnector style={{backgroundColor: theme.palette.secondary.main }}/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card>
                                            <CardHeader
                                                title={<Typography variant="h5" color="primary">Adapt and Adopt</Typography>} align="center"
                                                subheader={<Typography variant="h6" color="secondary">Embracing the New</Typography>}
                                            />
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="h6" color="primary">
                                            Seeking to fulfill my ambitions, I have embarked on this path. I look forward to showcasing some cool projects on this site in the near future.     
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary"/>
                                        <TimelineConnector style={{backgroundColor: theme.palette.secondary.main }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card>
                                            <CardHeader
                                                title={<Typography variant="h5" color="primary">Venture with Ingenuity</Typography>} align="center"
                                                subheader={<Typography variant="h6" color="secondary">Response to the Changing World</Typography>}
                                            />
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary" />
                                        </TimelineSeparator>
                                    <TimelineContent>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Grid>
                    </Grid>
                </Box>
                <Box component="div" className="about-images">
                    <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                        <Grid item xs={12} md={10}>
                            <Typography variant="h4" color="primary" >
                                I Like to Take Photos too.
                            </Typography>
                            <Typography variant="caption">{imageCarousel[activeStep].label}</Typography>
                        </Grid>
                        <Grid item xs={12} md={10} lg={12}>
                            <AutoPlayViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                                {imageCarousel.map((step, index)=> (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <img className="about-img" src={step.imgPath} alt={step.label}/>
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlayViews>
                            <MobileStepper steps={maxSteps} position="static" variant="progress" activeStep={activeStep} 
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps-1}> 
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeftRounded/> : <KeyboardArrowRightRounded/>}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRightRounded/> : <KeyboardArrowLeftRounded/>} 
                                    </Button>
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutComponent
