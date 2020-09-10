import React from 'react';
import {Grid, Typography, List, ListItem, ListItemText, Link, Divider, Box} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab';
import './about.css';


const AboutComponent = () => {
    return (
        <Box component="div" className="about-wrapper">
            <Box component="div" className="about">
                <Grid container justify="center" direction="column">
                    <Grid item xs={12}>
                        <Typography color="primary" variant="h3">
                            About Me
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AboutComponent
