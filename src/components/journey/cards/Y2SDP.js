import React from 'react';
import {Box, Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider, Slide} from '@material-ui/core';
import {ExpandMore, CodeRounded, DeveloperModeRounded, DataUsageOutlined} from '@material-ui/icons';
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

const Y2SDPCard = () => {
    const classes = experienceCSS();
    
    const [open2, setOpen2] = React.useState({
        card2: false
    })

    const handleExpandClick = () => {
        setOpen2((open2) =>({card2: !open2.card2}));
    }

    return (
        <Box component="div" className={classes.body}>
            <Slide in={true} timeout={750} direction='left' style={{transitionDelay: 2750}}>
                <Card>
                    <CardHeader
                        title={<Typography variant="h5" className={classes.bodyH5} color="primary">University Software Development Project</Typography>} align="center"
                        subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">King's College London, Jan 2020 - Apr 2020</Typography>}
                    />
                    <CardContent>
                        <Typography variant="body1" color="primary" align="justify">
                            As a team of 9 people, we built an MVP (Minimum Viable Product) for a Social Media App Idea from a King's Accelerator Member.
                            The idea was to build an active competitor to LinkedIn which would match users based on their unique professional requirements and credentials.                    
                        </Typography> 
                    </CardContent>
                    <Typography variant="body1" color="secondary" align="center">
                            London, UK
                    </Typography>
                    <CardActions disableSpacing>
                        <Typography variant="h6" color="secondary" className={classes.details}>Details</Typography>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open2.card2,})} onClick={handleExpandClick} aria-expanded={open2.card2} aria-label="details">
                            <ExpandMore color="primary"/>
                        </IconButton>
                    </CardActions>
                    <Collapse className={classes.content} in={open2.card2} timeout="auto" unmountOnExit>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <CardContent>
                                    <Typography variant="body1" color="primary" align="justify">
                                    I was Frontend Team Leader and Client liaison team member. As we worked using agile development methodologies, we scored highly and were able to submit an appropriate MVP. 
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
                                <Chip color="primary" label="JavaScript" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="NoSQL" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Python" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary">Frameworks</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip color="primary" label="React native" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Neo4j" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="GraphQL" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Firebase" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
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
                                <Chip color="primary" label="Trello" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Postman" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="InVision" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Github" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                    </Collapse>
                </Card>
            </Slide>
        </Box>
    );
};

export default Y2SDPCard