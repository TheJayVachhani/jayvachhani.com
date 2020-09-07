import React from 'react';
import {Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider} from '@material-ui/core';
import {ExpandMore, CodeRounded, PanoramaFishEye, DeveloperModeRounded, DeveloperBoardRounded, DataUsageOutlined, Autorenew  } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './experience.css';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    details:{
        paddingLeft: '2%',
    },
    content: {
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingBottom: '4%',
    },
}));

const ExperienceComponent = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    
        return (
            <div className="experienceHeader">
                <Typography variant='h5' color="primary">Experience</Typography>
                <div>
                <Card>
                    <CardHeader
                        title="Trainee Software Developer" align="center"
                        subheader="Jaivel Aerospace Ltd, Jun 2020 - Jun 2021"
                    />
                    <CardContent>
                        <Typography variant="body1" color="primary" component="p" align="justify">
                            1-Year Industrial Placement, 
                            Building a bespoke software solution combining HR, Performance Management and Recruitment.
                        </Typography> 
                    </CardContent>
                    <CardActions disableSpacing>
                        <Typography variant="h6" color="secondary" className={classes.details}>More Details</Typography>
                        <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                            <ExpandMore color="primary"/>
                        </IconButton>
                    </CardActions>
                    <Collapse className={classes.content} in={expanded} timeout="auto" unmountOnExit>
                        <Grid container xs={12} direction="row" justify="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary" >Languages</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip label="JavaScript" icon={<CodeRounded />} className="chip"/>
                                <Chip label="Node JS" icon={<CodeRounded />} className="chip"/>
                                <Chip label="PostgreSQL" icon={<CodeRounded />} className="chip"/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container xs={12} direction="row" justify="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary" >Frameworks</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip label="REACT JS" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                <Chip label="Material-UI" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                <Chip label="PERN" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                <Chip label="Atomic Design" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                            </Grid>
                        </Grid>
                        <Divider variant="middle"/>
                        <Grid container xs={12} direction="row" justify="center">
                            <Grid item xs={4}>
                                <List>
                                    <ListItem>
                                        <ListItemText disableTypography primary={<Typography color="primary" >Tools</Typography>}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={8}>
                                <Chip label="Jira" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                <Chip label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                <Chip label="Figma" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                <Chip label="Bitbucket" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                <Chip label="Office 365" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Card>
                </div>
            </div>
        );
    
}

export default ExperienceComponent;