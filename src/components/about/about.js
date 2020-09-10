import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Grid, Typography,Paper, Button, MobileStepper, List, ListItem, ListItemText, Link, Divider, Box} from '@material-ui/core';
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

const AutoPlayViews = autoPlay(SwipeableViews);


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
                    <Grid container justify="center" direction="column" alignItems="center">
                        <Grid item xs={12} md={10}>
                            <Typography color="primary" variant="h3">
                                I'm Jay
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
                <Box component="div" className="about-images">
                    <Grid container justify="center" direction="column" alignItems="center">
                        <Grid item xs={12} md={9}>
                            <Typography variant="h6">
                                I Like to Take Photos
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Paper square elevation={0} className="about-image-paper">
                                <Typography>{imageCarousel[activeStep].label}</Typography>
                            </Paper>
                            <AutoPlayViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                                {imageCarousel.map((step, index)=> (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <img className="about-img" src={step.imgPath} alt={step.label}/>
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlayViews>
                            <MobileStepper steps={maxSteps} position="static" variant="text" activeStep={activeStep} 
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps-1}>
                                        Next 
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeftRounded/> : <KeyboardArrowRightRounded/>}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRightRounded/> : <KeyboardArrowLeftRounded/>}
                                        Back 
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
