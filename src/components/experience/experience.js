import React, {useState} from 'react';
import {Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Button, Typography, List, ListItem, ListItemText, Link, Divider} from '@material-ui/core';
import {ExpandMore, CodeRounded, PanoramaFishEye, DeveloperModeRounded, DeveloperBoardRounded, DataUsageOutlined, Autorenew  } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './experience.css';

const useStyles = makeStyles((theme) => ({
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
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);

    const handleBigClick = () => {
        setExpanded(!expanded);
        setExpanded2(!expanded2);
        setExpanded3(!expanded3);
        setExpanded4(!expanded4);
        setExpanded5(!expanded5);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };

    const handleExpandClick5 = () => {
        setExpanded5(!expanded5);
    };
    
    return (
        <div className="experience-container">
            <div className="experience-header">
                <Grid container direction="column" justify="center" align="center">
                    <Grid item xs={12}>
                        <Typography  variant='h3' color="primary">Experience</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth={true} onClick={handleBigClick} color="secondary">All</Button>
                    </Grid>
                </Grid>
                
                <div className="experience-header">
                    <Card>
                        <CardHeader
                            title={<Typography variant="h5" color="primary">Trainee Software Developer</Typography>} align="center"
                            subheader={<Typography variant="h6" color="secondary">Jaivel Aerospace Ltd, Jun 2020 - Jun 2021</Typography>}
                        />
                        <CardContent>
                            <Typography  variant="body1" color="primary"  align="justify">
                                1-Year Industrial Placement, 
                                Building a bespoke software solution combining HR, Performance Management and Recruitment.
                            </Typography> 
                        </CardContent>
                        <Typography  variant="body1" color="secondary"  align="center">
                                Nottingham, UK and Ahmedabad, India
                        </Typography>
                        <CardActions disableSpacing>
                            <Typography  variant="h6" color="secondary" className={classes.details}>More Details</Typography>
                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="more details">
                                <ExpandMore color="primary"/>
                            </IconButton>
                        </CardActions>
                        <Collapse className={classes.content} in={expanded} timeout="auto" unmountOnExit>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Languages</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="JavaScript" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="Node JS" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="PostgreSQL" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="Git" icon={<CodeRounded />} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Frameworks</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="REACT JS" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Material-UI" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="PERN" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Atomic Design" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Tools</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="Jira" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Figma" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Bitbucket" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Office 365" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Card>
                </div>
                <br/>
                <div>
                    <Card>
                        <CardHeader
                            title={<Typography variant="h5" color="primary">University Software Development Project</Typography>} align="center"
                            subheader={<Typography variant="h6" color="secondary">King's College London, Jan - Apr 2020</Typography>}
                        />
                        <CardContent>
                            <Typography  variant="body1" color="primary" align="justify">
                                As a team of 9 people, build a MVP for a Social Media App Idea for a King's Accelerator Member. 
                            </Typography> 
                        </CardContent>
                        <Typography  variant="body1" color="secondary" align="center">
                                London, UK
                        </Typography>
                        <CardActions disableSpacing>
                            <Typography  variant="h6" color="secondary" className={classes.details}>More Details</Typography>
                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded2,})} onClick={handleExpandClick2} aria-expanded={expanded2} aria-label="more details">
                                <ExpandMore color="primary"/>
                            </IconButton>
                        </CardActions>
                        <Collapse className={classes.content} in={expanded2} timeout="auto" unmountOnExit>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={12}>
                                    <CardContent>
                                        <Typography  variant="body1" color="primary"  align="justify">
                                        I was Frontend Team Leader and Client liaison team member. As we worked using agile development methodologies, we scored highly and were able to submit an appropriate MVP. 
                                        </Typography> 
                                    </CardContent>
                                </Grid>
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Languages</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="JavaScript" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="NoSQL" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="Python" icon={<CodeRounded />} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Frameworks</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="React native" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Neo4j" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="GraphQL" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Firebase" icon={<DeveloperModeRounded fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Tools</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="Trello" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Postman" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="InVision" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Github" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Card>
                </div>
                <br/>
                <div>
                    <Card>
                        <CardHeader
                            title={<Typography variant="h5" color="primary">University Artificial Intelligence Planning Project</Typography>} align="center"
                            subheader={<Typography variant="h6" color="secondary">King's College London, Apr 2020</Typography>}
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
                            <Typography  variant="h6" color="secondary" className={classes.details}>More Details</Typography>
                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded3,})} onClick={handleExpandClick3} aria-expanded={expanded3} aria-label="more details">
                                <ExpandMore color="primary"/>
                            </IconButton>
                        </CardActions>
                        <Collapse className={classes.content} in={expanded3} timeout="auto" unmountOnExit>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={12}>
                                <CardContent>
                                    <Typography  variant="body1" color="primary"  align="justify">
                                        We modelled volunteers who can carry resources that they pick up from a depot to various at-risk individuals.
                                        Our full report with our code can be found <Link href="https://github.com/JVK1890728/AI-Coursework" target="_blank">here</Link>. We scored 93/100.
                                    </Typography> 
                                </CardContent>
                                </Grid>
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary">Languages</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="PDDL" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="Queen's English" icon={<CodeRounded />} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Skills Applied</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="Experimentation" icon={<DeveloperBoardRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Analysis" icon={<DeveloperBoardRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Evaluation" icon={<DeveloperBoardRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Presentation" icon={<DeveloperBoardRounded fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Test-Driven Development" icon={<DeveloperBoardRounded fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Tools</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Notion" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="PDDL Parser" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Card>
                </div>
                <br/>
                <div>
                    <Card>
                        <CardHeader
                            title={<Typography variant="h5" color="primary">Learner Work Experience</Typography>} align="center"
                            subheader={<Typography variant="h6" color="secondary">Jaivel Aerospace, Jun - Sept 2019</Typography>}
                        />
                        <CardContent>
                            <Typography  variant="body1" color="primary" align="justify">
                                Helped build a new Company Website: <Link href="https://jaivel.aero/" target="_blank">Jaivel</Link>
                            </Typography> 
                        </CardContent>
                        <Typography  variant="body1" color="secondary" align="center">
                            Ahmedabad, India
                        </Typography>
                        <CardActions disableSpacing>
                            <Typography  variant="h6" color="secondary" className={classes.details}>More Details</Typography>
                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded4,})} onClick={handleExpandClick4} aria-expanded={expanded4} aria-label="more details">
                                <ExpandMore color="primary"/>
                            </IconButton>
                        </CardActions>
                        <Collapse className={classes.content} in={expanded4} timeout="auto" unmountOnExit>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={12}>
                                <CardContent>
                                    <Typography  variant="body1" color="primary"  align="justify">
                                        My First proper web development project. I assisted in the realization of a new website design and content creation.
                                    </Typography> 
                                </CardContent>
                                </Grid>
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary">Languages</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="PHP" icon={<CodeRounded />} className="chip"/>
                                    <Chip color="primary" label="HTML/CSS" icon={<CodeRounded />} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Tools</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="WordPress" icon={<PanoramaFishEye fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Office 365" icon={<PanoramaFishEye  fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="X-Mind" icon={<PanoramaFishEye  fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="GIMP" icon={<PanoramaFishEye  fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Tools</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Notion" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="PDDL Parser" icon={<DataUsageOutlined fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Card>
                </div>
                <br/>
                <div>
                    <Card>
                        <CardHeader
                            title={<Typography variant="h5" color="primary">Student Work Experience</Typography>} align="center"
                            subheader={<Typography variant="h6" color="secondary">McLaren Racing Limited, 5 weeks Aug 2017</Typography>}
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
                            <Typography  variant="h6" color="secondary" className={classes.details}>More Details</Typography>
                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded5,})} onClick={handleExpandClick5} aria-expanded={expanded5} aria-label="more details">
                                <ExpandMore color="primary"/>
                            </IconButton>
                        </CardActions>
                        <Collapse className={classes.content} in={expanded5} timeout="auto" unmountOnExit>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={12}>
                                    <CardContent>
                                        <Typography  variant="body1" color="primary" align="justify">
                                            My First real industry experience. As a fan of F1 it was an honour to be at McLaren, I still follow and wish them the best.
                                            I was working within the F1 Operations division and utilizing my skills to find improvement areas.
                                        </Typography> 
                                    </CardContent>
                                </Grid>
                            </Grid>
                            <Divider variant="middle"/>
                            <Grid container direction="row" justify="center">
                                <Grid item xs={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemText disableTypography primary={<Typography  color="primary" >Skills Applied</Typography>}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={8}>
                                    <Chip color="primary" label="Analysis" icon={<Autorenew fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Problem Solving" icon={<Autorenew fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Presentation" icon={<Autorenew fontSize="small"/>} className="chip"/>
                                    <Chip color="primary" label="Creativity" icon={<Autorenew fontSize="small"/>} className="chip"/>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Card>
                </div>
                <Grid container direction="column" justify="center" align="center">
                    <Grid item xs={12}>
                        <Button fullWidth={true} onClick={handleBigClick} color="secondary" align="center">All</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
    
}

export default ExperienceComponent;