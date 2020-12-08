import React from 'react';
import {Box, Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider, Slide} from '@material-ui/core';
import {ExpandMore, AutorenewRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

const experienceCSS = makeStyles((theme) => ({
    header:{
        padding: "0 0 15px 0"
    },
    body:{
        width: "100%"
    },
    bodyH5:{
        textTransform: "capitalize",
        fontWeight: "300",
        letterSpacing: "1px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1.7rem",
        textAlign: "center"
    },
    bodyH6:{
        textTransform: "capitalize",
        fontWeight: "400",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1rem",
        textAlign: "center"
    },
    chip:{
        margin: "1px 1px 0 0"
    },
    details:{
        paddingLeft: '2%',        
        textTransform: "capitalize",
        fontWeight: "400",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "1rem",
        textAlign: "center"
    },
    content:{
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingBottom: '4%',
    },
    expand:{
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen:{
      transform: 'rotate(180deg)',
    },
}));

const WorkExpMcLarenCard = () => {
    const classes = experienceCSS();
    
    const [open5, setOpen5] = React.useState({
        card5: false
    });

    const handleExpandClick = () => {
        setOpen5((open5) =>({card5: !open5.card5}));
    };

    return (
        <Box component="div" className={classes.body}>
            <Slide in={true} timeout={750} direction='left' style={{transitionDelay: 1450}}>
                <Card>
                    <CardHeader
                        title={<Typography variant="h5" className={classes.bodyH5} color="primary">Student Work Experience</Typography>} align="center"
                        subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">McLaren Racing Limited, Aug 2017 - Oct 2017</Typography>}
                    />
                    <CardContent>
                        <Typography  variant="body1" color="primary"  align="justify">
                            I was a member of the Race-Team-Logistics and Stores teams over these 5 weeks. My task was to create new SOPs which would enable more efficient part-movement around the facility.
                        </Typography> 
                    </CardContent>
                    <Typography  variant="body1" color="secondary" align="center">
                            Woking, UK
                    </Typography>
                    <CardActions disableSpacing>
                        <Typography variant="h6" color="secondary" className={classes.details}>Details</Typography>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open5.card5,})} onClick={handleExpandClick} aria-expanded={open5.card5} aria-label="details">
                            <ExpandMore color="primary"/>
                        </IconButton>
                    </CardActions>
                    <Collapse className={classes.content} in={open5.card5} timeout="auto" unmountOnExit>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <CardContent>
                                    <Typography  variant="body1" color="primary" align="justify">
                                        My First real industry experience. As a fan of F1 it was an honour to be at McLaren, I still follow and wish them the best.
                                        I was working within the F1 Operations division and utilizing my skills to analyse the part movement processes and find key areas of improvement.
                                    </Typography> 
                                </CardContent>
                                <Divider variant="middle"/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary">Skills</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="Analysis" icon={<AutorenewRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Problem Solving" icon={<AutorenewRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Presentation" icon={<AutorenewRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Creativity" icon={<AutorenewRounded fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                    </Collapse>
                </Card>
            </Slide>
        </Box>
    );
};

export default WorkExpMcLarenCard