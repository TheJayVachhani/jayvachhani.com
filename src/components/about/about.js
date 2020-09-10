import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Grid, Typography, MobileStepper, List, ListItem, ListItemText, Link, Divider, Box} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab';
import './about.css';


const AboutComponent = () => {

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
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutComponent
