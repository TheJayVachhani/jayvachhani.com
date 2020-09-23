import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Grid, Typography, Button, MobileStepper, Box, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
import {KeyboardArrowLeftRounded, KeyboardArrowRightRounded, ExpandMoreRounded, NoteAddRounded} from '@material-ui/icons';

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
                                <Typography variant="h5" color="secondary">
                                    I love to write about my learning, thoughts and interests.                               
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <Box component="div" className="notes-accordion-container">
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="JS Overview" id="JS Overview">
                                            <Typography variant="h5" color="primary" >JS Overview</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="h6" align="left">
                                                I wrote these notes whilst learning JavaScript from FreeCodeCamp.
                                                It has all the tools needed to grasp JS if you are already familiar with programming languages like Java/Python. 
                                                I have been meticulous in covering all basic bases required to start building your JS upward from.
                                            </Typography>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <Button href="/docs/JavaScript.pdf" fullWidth={true} color="primary" endIcon={<NoteAddRounded fontSize="small" color="secondary"/>}>
                                                Download
                                            </Button>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="HTML & CSS basics overview" id="HTML & CSS basics overview">
                                            <Typography variant="h5" color="primary" >HTML & CSS Basics</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="h6" align="left">
                                                I wrote these notes whilst refreshing my understanding on HTML & CSS. It can be used as an introductory document for new web developers looking to build their first sites.
                                                I find it essential to understand these fundamentals before jumping into JS Frameworks like Angular, Vue, React for more complex sites.
                                            </Typography>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <Button href="/docs/HTML_CSS.pdf" fullWidth={true} color="primary" endIcon={<NoteAddRounded fontSize="small" color="secondary"/>}>
                                                Download
                                            </Button>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="React + Node" id="React + Node">
                                            <Typography variant="h5" color="primary" >React + Node</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="h6" align="left">
                                                I wrote these notes as a guide on how to set up the project repository of a large scale Node and React project. 
                                            </Typography>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <Button href="/docs/React_Node.pdf" fullWidth={true} color="primary" endIcon={<NoteAddRounded fontSize="small" color="secondary"/>}>
                                                Download
                                            </Button>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
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
