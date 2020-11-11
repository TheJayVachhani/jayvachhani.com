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

const Y3IPPCard = () => {
    const classes = experienceCSS();
    
    const [open1, setOpen1] = React.useState({
        card1: false
    })

    const handleExpandClick1 = () => {
        setOpen1((open1) =>({card1: !open1.card1}));
    }

    return (
        <Box component="div" className={classes.body}>
            <Slide in={true} timeout={750} direction="left" style={{transitionDelay: 3250}}>
                <Card>
                    <CardHeader
                        title={<Typography variant="h5" className={classes.bodyH5} color="primary">Trainee Software Developer</Typography>} align="center"
                        subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">Jaivel Aerospace Ltd, Jun 2020 - Jun 2021</Typography>}
                    />
                    <CardContent>
                        <Typography variant="body1" color="primary" align="justify">
                            1 Year Industrial Placement. I have 2 major tasks, first of which is to build a bespoke careers portal which would see to the implementation a new recruitment strategy.
                            My secondary major task is to build a software engineering team to tackle a larger scale project of a bespoke performance management system.
                        </Typography> 
                    </CardContent>
                    <Typography  variant="body1" color="secondary" align="center">
                            Nottingham, UK and Ahmedabad, India
                    </Typography>
                    <CardActions disableSpacing>
                        <Typography variant="h6" color="secondary" className={classes.details}>Details</Typography>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open1.card1})} onClick={handleExpandClick1} aria-expanded={open1.card1} aria-label="details">
                            <ExpandMore color="primary"/>
                        </IconButton>
                    </CardActions>
                    <Collapse className={classes.content} in={open1.card1} timeout="auto" unmountOnExit>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <CardContent>
                                    <Typography variant="body1" color="primary" align="justify">
                                        I have spent the first 6 months in the UK designing and building a self-hosted development environment and a modern careers portal for the firm.
                                        Over the months of Dec 2020 to April 2020 I will be in Ahmedabad, India to implement and test the careers portal whilst beginning my secondary major task. 
                                        I also assisted in many activities alongside my major tasks which include: business administration, fulfillment and customer interaction.
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
                                <Chip color="primary" label="Node JS" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="PostgreSQL" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Git" icon={<CodeRounded fontSize="small"/>} className={classes.chip}/>
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
                                <Chip color="primary" label="REACT JS" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Material-UI" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="PERN" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Atomic Design" icon={<DeveloperModeRounded fontSize="small"/>} className={classes.chip}/>
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
                                <Chip color="primary" label="Jira" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Figma" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Bitbucket" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                <Chip color="primary" label="Office 365" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                    </Collapse>
                </Card>
            </Slide>
        </Box>
    );
};

export default Y3IPPCard
