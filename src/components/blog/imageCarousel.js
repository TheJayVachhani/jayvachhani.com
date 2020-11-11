import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@material-ui/core/styles';
import {Grid, Typography, Button, MobileStepper, Box, Fade} from '@material-ui/core';
import {KeyboardArrowLeftRounded, KeyboardArrowRightRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import BoliviaSalt from './images/Bolivia-Salt-Flats.png';
import BoliviaRail from './images/Bolivia-Abandoned-Railway.png';
import BoliviaAmz from './images/Bolivia-Amazon.png';
import BoliviaMnT from './images/Bolivia-MtTarija.png';
import BrightonSea from './images/Brighton-Sea-Sunset.png';
import Rottingdean from './images/Rottingdean-Cliffs.png';
import GermanySpeyer from './images/Speyer-Quiet-Street.png';
import SwissGlacier from './images/Zermatt-Glacier.png';
import SwissLodge from './images/Zermatt-Lodge.png';

const imageCarousel = [
    {label: 'Bolivia - Condoriri', imgPath: BoliviaMnT},
    {label: 'Switzerland - Lodge in Zermatt', imgPath: SwissLodge},
    {label: 'Switzerland - Zermatt Glacier', imgPath: SwissGlacier},
    {label: 'Germany - Speyer', imgPath: GermanySpeyer},
    {label: 'Bolivia - Salar de Uyuni', imgPath: BoliviaSalt},
    {label: 'Bolivia - Rurrenabaque', imgPath: BoliviaAmz},
    {label: 'Bolivia - Uyuni Railway', imgPath: BoliviaRail},
    {label: 'UK - Brighton', imgPath: BrightonSea},
    {label: 'UK - Rottingdean Cliffs', imgPath: Rottingdean},
];

const imgCSS = makeStyles((theme) => ({
    imgH4:{
        textTransform: "capitalize",
        fontWeight: "400",
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    imgH6:{  
        fontWeight: "400",
        letterSpacing: "1px",
        fontSize: "1rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    imageContainer:{
        margin: "auto",
        maxWidth: "75%",
        maxHeight: "40%",
        paddingTop: "1%",
        textAlign: "center",
        overflow: "hidden"
    },
    image:{
        display: "block",
        width: "100%",
        overflow: "hidden"
    },
}))

const ImageCarouselComponent = () => {
    const classes = imgCSS();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
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
        <Box component="div" className={classes.imageContainer}>
            <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                <Grid item xs={12} lg={10}>
                    <Fade in={true} timeout={500} style={{transitionDelay: 2000}}>
                        <Typography variant="h4" className={classes.imgH4} color="primary" >
                            I Like to Take Photos Too.
                        </Typography>
                    </Fade>
                    <Fade in={true} timeout={500} style={{transitionDelay: 2250}}>
                        <Typography variant="h6" className={classes.imgH6}>{imageCarousel[activeStep].label}</Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12} lg={10} xl={8}>
                    <Fade in={true} timeout={500} style={{transitionDelay: 2500}}>
                        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                            {imageCarousel.map((step, index)=> (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img className={classes.image} src={step.imgPath} alt={step.label}/>
                                    ) : null}
                                </div>
                            ))}
                        </SwipeableViews>
                    </Fade>
                    <Fade in={true} timeout={500} style={{transitionDelay: 2500}}>
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
                    </Fade>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ImageCarouselComponent
