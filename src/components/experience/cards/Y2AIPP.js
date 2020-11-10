import React from 'react';
import {Box, Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider, Link, Slide} from '@material-ui/core';
import {ExpandMore, CodeRounded, DeveloperBoardRounded, DataUsageOutlined} from '@material-ui/icons';
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

const Y2AIPPCard = () => {
    const classes = experienceCSS();
    
    const [open3, setOpen3] = React.useState({
        card3: false
    })

    const handleExpandClick = () => {
        setOpen3((open3) =>({card3: !open3.card3}));
    }

    return (
        <Box component="div" className={classes.body}>
            <Slide in={true} timeout={750} direction='left' style={{transitionDelay: 2250}}>
                <Card>
                    <CardHeader
                        title={<Typography variant="h5" className={classes.bodyH5} color="primary">University Artificial Intelligence Planning Project</Typography>} align="center"
                        subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">King's College London, Apr 2020</Typography>}
                    />
                    <CardContent>
                        <Typography  variant="body1" color="primary"  align="justify">
                            My First ever AI project in a team of 3. Our task was to model and test a domain for an AI Planner to solve.
                            We chose to model the delivery of necessities to at-risk individuals during COVID-19.
                        </Typography> 
                    </CardContent>
                    <Typography  variant="body1" color="secondary"  align="center">
                        London, UK
                    </Typography>
                    <CardActions disableSpacing>
                        <Typography variant="h6" color="secondary" className={classes.details}>Details</Typography>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open3.card3,})} onClick={handleExpandClick} aria-expanded={open3.card3} aria-label="details">
                            <ExpandMore color="primary"/>
                        </IconButton>
                    </CardActions>
                    <Collapse className={classes.content} in={open3.card3} timeout="auto" unmountOnExit>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                            <CardContent>
                                <Typography  variant="body1" color="primary" align="justify">
                                    We modelled volunteers who can carry resources that they pick up from a depot to various at-risk individuals. <Link href="https://github.com/JVK1890728/AI-Coursework" target="_blank" rel="noreferrer">Our full report with our code can be found on Github.</Link>, we scored 93/100.
                                </Typography> 
                            </CardContent>
                            <Divider variant="middle"/>
                            </Grid>
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography  color="primary">Languages</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="PDDL" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Queen's English" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary">Skills Applied</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="Experimentation" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Analysis" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Evaluation" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Presentation" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Test-Driven Development" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
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

export default Y2AIPPCard