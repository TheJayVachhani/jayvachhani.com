import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Grid, Typography, Button, MobileStepper, Box} from '@material-ui/core';
import {KeyboardArrowLeftRounded, KeyboardArrowRightRounded} from '@material-ui/icons';

import BoliviaSalt from './images/Bolivia-Salt-Flats.png';
import BoliviaRail from './images/Bolivia-Abandoned-Railway.png';
import BoliviaAmz from './images/Bolivia-Amazon.png';
import BoliviaMnT from './images/Bolivia-MtTarija.png';
import BrightonSea from './images/Brighton-Sea-Sunset.png';
import Rottingdean from './images/Rottingdean-Cliffs.png';
import GermanySpeyer from './images/Speyer-Quiet-Street.png';
import SwissGlacier from './images/Zermatt-Glacier.png';
import SwissLodge from './images/Zermatt-Lodge.png';
import './notes.css';

const imageCarousel = [
    {
        label: 'UK - Brighton',
        imgPath: BrightonSea ,
    },
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
    {
        label: 'UK - Rottingdean Cliffs',
        imgPath: Rottingdean ,
    },
]

const NotesComponent = () => {
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
        <div>
            <Box component="div" className="notes-wrapper">
                <Box component="div" className="notes">
                    <Box component="div" className="notes-header">
                        <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                            <Grid item xs={12} md={10}>
                                <Typography variant="h3" color="primary">
                                    My Notes.
                                </Typography>
                                <Typography variant="h5">
                                    I love to write about my learning, thoughts and interests.                               
                                </Typography>
                                <Typography variant="h5">
                                    I am currently working on this page to become my blog.
                                </Typography>
                                <Typography variant="h5">
                                    Currently this has some nice photos for you to look at.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component="div" className="notes-images">
                        <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                            <Grid item xs={12} lg={10}>
                                <Typography variant="h4" color="primary" >
                                    I Like to Take Photos.
                                </Typography>
                                <Typography variant="h6">{imageCarousel[activeStep].label}</Typography>
                            </Grid>
                            <Grid item xs={12} lg={10} xl={8}>
                                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                                    {imageCarousel.map((step, index)=> (
                                        <div key={step.label}>
                                            {Math.abs(activeStep - index) <= 2 ? (
                                                <img className="notes-img" src={step.imgPath} alt={step.label}/>
                                            ) : null}
                                        </div>
                                    ))}
                                </SwipeableViews>
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
        </div>
    )
}

export default NotesComponent
