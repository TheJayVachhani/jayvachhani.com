import React from 'react';
import {Typography, Box, Accordion, AccordionSummary, AccordionDetails, Fade} from '@material-ui/core';
import {ExpandMoreRounded} from '@material-ui/icons';
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

const BookPosts = () => {
    const classes = postCSS();
    return (
        <Box component="div" className={classes.accordionContainer}>
            <Fade in={true} timeout={500} style={{transitionDelay: 1000}}>
                <Typography variant="h4" className={classes.postH4} color="primary">
                    Reading
                </Typography>
            </Fade>
            <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                <Accordion>
                    <Fade in={true} timeout={500} style={{transitionDelay: 1250}}>
                        <AccordionSummary expandIcon={<ExpandMoreRounded color="primary"/>} aria-controls="JS Overview" id="JS Overview">
                            <Typography variant="h5" className={classes.postH5} color="primary" >Coming Dec 2020</Typography>
                        </AccordionSummary>
                    </Fade>
                    <AccordionDetails>
                        <Typography variant="h6" className={classes.postH6} align="left">
                            This section will include summaries and key points I have taken from books I have read. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Fade>
        </Box>
    );
};

export default BookPosts