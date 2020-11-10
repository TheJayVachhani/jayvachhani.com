import React from 'react';
import {Box, Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider, Link, Slide} from '@material-ui/core';
import {ExpandMore, CodeRounded, PanoramaFishEyeRounded, DataUsageOutlined} from '@material-ui/icons';
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

const WorkExpJACard = () => {
    const classes = experienceCSS();
    
    const [open4, setOpen4] = React.useState({
        card4: false
    })

    const handleExpandClick = () => {
        setOpen4((open4) =>({card4: !open4.card4}));
    }

    return (
        <Box component="div" className={classes.body}>
            <Slide in={true} timeout={750} direction='left' style={{transitionDelay: 2750}}>
                <Card>
                    <CardHeader
                        title={<Typography variant="h5" className={classes.bodyH5} color="primary">Learner Work Experience</Typography>} align="center"
                        subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">Jaivel Aerospace, Jun 2019 - Sept 2019</Typography>}
                    />
                    <CardContent>
                        <Typography  variant="body1" color="primary" align="justify">
                            I worked to build a new company website on Wordpress: <Link href="https://jaivel.aero/" target="_blank" rel="noreferrer">jaivel.aero</Link>
                        </Typography> 
                    </CardContent>
                    <Typography  variant="body1" color="secondary" align="center">
                        Ahmedabad, India
                    </Typography>
                    <CardActions disableSpacing>
                        <Typography variant="h6" color="secondary" className={classes.details}>Details</Typography>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open4.card4,})} onClick={handleExpandClick} aria-expanded={open4.card4} aria-label="details">
                            <ExpandMore color="primary"/>
                        </IconButton>
                    </CardActions>
                    <Collapse className={classes.content} in={open4.card4} timeout="auto" unmountOnExit>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                            <CardContent>
                                <Typography  variant="body1" color="primary" align="justify">
                                    My First proper web development project. I assisted in the realization of a new website design and content creation.
                                </Typography> 
                            </CardContent>
                            <Divider variant="middle"/>
                            </Grid>
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary">Languages</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="PHP" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="HTML/CSS" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary">Tools</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="WordPress" icon={<PanoramaFishEyeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Office 365" icon={<PanoramaFishEyeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="X-Mind" icon={<PanoramaFishEyeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="GIMP" icon={<PanoramaFishEyeRounded fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary">Tools</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Notion" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="PDDL Parser" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                    </Collapse>
                </Card>
            </Slide>
        </Box>
    );
};

export default WorkExpJACard