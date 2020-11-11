import React from 'react';
import {Typography, Button, Box, Accordion, AccordionSummary, AccordionDetails, Fade} from '@material-ui/core';
import {ExpandMoreRounded, NoteAddRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const postCSS = makeStyles((theme) => ({
    postH4:{
        textTransform: "capitalize",
        fontWeight: "400",
        textAlign: "center",
        padding:"0 0 15px 0",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    postH5:{
        fontWeight: "400",
        letterSpacing: "1px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    postH6:{  
        fontWeight: "400",
        letterSpacing: "1px",
        fontSize: "1rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    accordionContainer:{
        width: "100%",
        margin: "auto",
        textAlign: "center",
        padding: "1vh 0 2vh 0",
    },
}))

const CSPosts = () => {
    const classes = postCSS();
    return (
        <Box component="div" className={classes.accordionContainer}>
            <Fade in={true} timeout={500} style={{transitionDelay: 1000}}>
                <Typography variant="h4" className={classes.postH4} color="primary">
                    Computer Science
                </Typography>
            </Fade>
            <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                <Accordion>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="JS Overview" id="JS Overview">
                            <Typography variant="h5" className={classes.postH5} color="primary" >JS Overview</Typography>
                        </AccordionSummary>
                    </Fade>
                    <AccordionDetails>
                        <Typography variant="h6" className={classes.postH6} align="left">
                            I wrote these notes whilst learning JavaScript from FreeCodeCamp.
                            It has all the tools needed to grasp JS if you are already familiar with programming languages like Java/Python. 
                            I have been meticulous in covering all basic bases required to start building your JS upward from.
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Button href="/docs/JavaScript.pdf" fullWidth={true} color="primary" endIcon={<NoteAddRounded fontSize="small" color="secondary"/>}>
                            <Typography variant="h6" className={classes.postH6} color="primary">Download</Typography>
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Fade>
            <Fade in={true} timeout={500} style={{transitionDelay: 1500}}>
                <Accordion>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1500}}>
                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="HTML & CSS basics overview" id="HTML & CSS basics overview">
                            <Typography variant="h5" className={classes.postH5} color="primary" >HTML & CSS Basics</Typography>
                        </AccordionSummary>
                    </Fade>
                    <AccordionDetails>
                        <Typography variant="h6" className={classes.postH6} align="left">
                            I wrote these notes whilst refreshing my understanding on HTML & CSS. It can be used as an introductory document for new web developers looking to build their first sites.
                            I find it essential to understand these fundamentals before jumping into JS Frameworks like Angular, Vue, React for more complex sites.
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Button href="/docs/HTML_CSS.pdf" fullWidth={true} color="primary" endIcon={<NoteAddRounded fontSize="small" color="secondary"/>}>
                            <Typography variant="h6" className={classes.postH6} color="primary">Download</Typography>
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Fade>
            <Fade in={true} timeout={500} style={{transitionDelay: 1750}}>
                <Accordion>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1750}}>
                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="React + Node" id="React + Node">
                            <Typography variant="h5" className={classes.postH5} color="primary" >React + Node</Typography>
                        </AccordionSummary>
                    </Fade>
                    <AccordionDetails>
                        <Typography variant="h6" className={classes.postH6} align="left">
                            I wrote these notes as a guide on how to set up the project repository of a large scale Node and React project. 
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Button href="/docs/React_Node.pdf" fullWidth={true} color="primary" endIcon={<NoteAddRounded fontSize="small" color="secondary"/>}>
                            <Typography variant="h6" className={classes.postH6} color="primary">Download</Typography>
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Fade>
        </Box>
    );
};

export default CSPosts
