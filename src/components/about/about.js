import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Grid, Card, CardHeader, CardContent, Typography, Button, MobileStepper, Box} from '@material-ui/core';
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
        <div>
            `<Box component="div" className="about-wrapper">
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
                        <Box component="div" className="about-body-header">
                            <Grid container justify="center" direction="column" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography color="primary" variant="h4">
                                        I Like to Cook.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container justify="center" spacing={3} direction="row" alignItems="flex-start">
                            <Grid item xs={11} lg={3}>
                                <Box component="div" className="about-body-item">
                                    <Card>
                                        <CardHeader
                                            title={<Typography variant="h5" color="primary">The Recipe</Typography>} align="center"
                                            subheader={<Typography variant="h6" color="secondary">My Beginning</Typography>}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" color="primary" align="left">
                                                My first line of code was written at the beginning of university.
                                            </Typography>
                                            <Typography variant="h6" color="primary" align="left">
                                                Like any recipe, I've only improved the more I refined it.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={11} lg={4}>
                                <Box component="div" className="about-body-item">
                                    <Card experience-header>
                                        <CardHeader
                                            title={<Typography variant="h5" color="primary">Skills in Practice</Typography>} align="center"
                                            subheader={<Typography variant="h6" color="secondary">Adapt and Adopt</Typography>}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" color="primary"  align="left">
                                                Learning from masters in their craft I've gained knowledge.   
                                            </Typography>
                                            <Typography variant="h6" color="primary" align="left">
                                                I've immersed myself in many MOOCs, tapping into a vast set of means to develop my skills.    
                                            </Typography>                                              
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={11} lg={3}>
                                <Box component="div" className="about-body-item">
                                    <Card experience-header>
                                        <CardHeader
                                            title={<Typography variant="h5" color="primary">The Result</Typography>} align="center"
                                            subheader={<Typography variant="h6" color="secondary">My Goal</Typography>}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" color="primary" align="left">
                                                To deliver new, great products.
                                            </Typography>
                                            <Typography variant="h6" color="primary" align="left" >
                                                I look forward to showcasing some cool projects, and maybe a recipe or two, on this site in the near future.     
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component="div" className="about-images">
                        <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                            <Grid item xs={12} lg={10}>
                                <Typography variant="h4" color="primary" >
                                    I Like to Take Photos.
                                </Typography>
                                <Typography variant="body2">{imageCarousel[activeStep].label}</Typography>
                            </Grid>
                            <Grid item xs={12} lg={10} xl={8}>
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
        </div>
    )
}

export default AboutComponent
