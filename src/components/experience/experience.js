import React from 'react';
import {Box, Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Button, Typography, List, ListItem, ListItemText, Link, Divider} from '@material-ui/core';
import {ExpandMore, CodeRounded, PanoramaFishEye, DeveloperModeRounded, DeveloperBoardRounded, DataUsageOutlined, Autorenew} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const experienceCSS = makeStyles((theme) => ({
    experienceContainer:{
        width: "100%",
        margin: "3% auto 2% auto"
    }, 
    header:{
        padding: "0 0 5px 0"
    },
    headerH3:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    expCardContainer:{
        maxWidth: "500px",
        margin: "auto",
        overflow: "hidden"
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
    content: {
        paddingLeft: '2%',
        paddingRight: '2%',
        paddingBottom: '4%',
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

}));

const ExperienceComponent = () => {

    const [open, setOpen] = React.useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false
    })

    const handleBigClick = () => {
        setOpen((open) =>({card1: !open.card1, card2: !open.card2, card3: !open.card3, card4: !open.card4, card5: !open.card5}));
    }

    const handleExpandClick1 = () => {
        setOpen((open) =>({card1: !open.card1}));
    }

    const handleExpandClick2 = () => {
        setOpen((open) =>({card2: !open.card2}));
    };

    const handleExpandClick3 = () => {
        setOpen((open) =>({card3: !open.card3}));
    };

    const handleExpandClick4 = () => {
        setOpen((open) =>({card4: !open.card4}));
    };

    const handleExpandClick5 = () => {
        setOpen((open) =>({card5: !open.card5}));
    };

    const classes = experienceCSS();
    return (
        <Box component="div" className={classes.experienceContainer}>
            <Box component="div" className={classes.header}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography  variant='h3' color="primary" className={classes.headerH3}>Experience</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth={true} onClick={handleBigClick} color="secondary">All</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box component="div" className={classes.body}>
                <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Grid item xs={0} lg={4}>

                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Box component="div" className={classes.expCardContainer}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                                <Grid item xs={11}>
                                    <Card>
                                        <CardHeader
                                            title={<Typography variant="h5" className={classes.bodyH5} color="primary">Trainee Software Developer</Typography>} align="center"
                                            subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">Jaivel Aerospace Ltd, Jun 2020 - Jun 2021</Typography>}
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
                                            <Typography  variant="h6" color="secondary" className={classes.details}>Details</Typography>
                                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card1})} onClick={handleExpandClick1} aria-expanded={open.card1} aria-label="details">
                                                <ExpandMore color="primary"/>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse className={classes.content} in={open.card1} timeout="auto" unmountOnExit>
                                            <Grid container direction="row" justify="center">
                                                <Grid item xs={4}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Languages</Typography>}/>
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <Chip color="primary" label="JavaScript" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="Node JS" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="PostgreSQL" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="Git" icon={<CodeRounded />} className={classes.chip}/>
                                                </Grid>
                                            </Grid>
                                            <Divider variant="middle"/>
                                            <Grid container direction="row" justify="center">
                                                <Grid item xs={4}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Frameworks</Typography>}/>
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
                                            <Grid container direction="row" justify="center">
                                                <Grid item xs={4}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Tools</Typography>}/>
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
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid item xs={11}>
                                    <Card>
                                        <CardHeader
                                            title={<Typography variant="h5" className={classes.bodyH5} color="primary">University Software Development Project</Typography>} align="center"
                                            subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">King's College London, Jan - Apr 2020</Typography>}
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
                                            <Typography  variant="h6" color="secondary" className={classes.details} >Details</Typography>
                                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card2,})} onClick={handleExpandClick2} aria-expanded={open.card2} aria-label="details">
                                                <ExpandMore color="primary"/>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse className={classes.content} in={open.card2} timeout="auto" unmountOnExit>
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
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Languages</Typography>}/>
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <Chip color="primary" label="JavaScript" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="NoSQL" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="Python" icon={<CodeRounded />} className={classes.chip}/>
                                                </Grid>
                                            </Grid>
                                            <Divider variant="middle"/>
                                            <Grid container direction="row" justify="center">
                                                <Grid item xs={4}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Frameworks</Typography>}/>
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
                                            <Grid container direction="row" justify="center">
                                                <Grid item xs={4}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Tools</Typography>}/>
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
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid item xs={11}>
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
                                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card3,})} onClick={handleExpandClick3} aria-expanded={open.card3} aria-label="details">
                                                <ExpandMore color="primary"/>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse className={classes.content} in={open.card3} timeout="auto" unmountOnExit>
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
                                                    <Chip color="primary" label="PDDL" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="Queen's English" icon={<CodeRounded />} className={classes.chip}/>
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
                                                    <Chip color="primary" label="Experimentation" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Analysis" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Evaluation" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Presentation" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Test-Driven Development" icon={<DeveloperBoardRounded fontSize="small"/>} className={classes.chip}/>
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
                                                    <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Notion" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="PDDL Parser" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid item xs={11}>
                                    <Card>
                                        <CardHeader
                                            title={<Typography variant="h5" className={classes.bodyH5} color="primary">Learner Work Experience</Typography>} align="center"
                                            subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">Jaivel Aerospace, Jun - Sept 2019</Typography>}
                                        />
                                        <CardContent>
                                            <Typography  variant="body1" color="primary" align="justify">
                                                I worked to build a new Company Website on Wordpress: <Link href="https://jaivel.aero/" target="_blank">Jaivel.com</Link>
                                            </Typography> 
                                        </CardContent>
                                        <Typography  variant="body1" color="secondary" align="center">
                                            Ahmedabad, India
                                        </Typography>
                                        <CardActions disableSpacing>
                                            <Typography variant="h6" color="secondary" className={classes.details}>Details</Typography>
                                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card4,})} onClick={handleExpandClick4} aria-expanded={open.card4} aria-label="details">
                                                <ExpandMore color="primary"/>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse className={classes.content} in={open.card4} timeout="auto" unmountOnExit>
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
                                                    <Chip color="primary" label="PHP" icon={<CodeRounded />} className={classes.chip}/>
                                                    <Chip color="primary" label="HTML/CSS" icon={<CodeRounded />} className={classes.chip}/>
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
                                                    <Chip color="primary" label="WordPress" icon={<PanoramaFishEye fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Office 365" icon={<PanoramaFishEye  fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="X-Mind" icon={<PanoramaFishEye  fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="GIMP" icon={<PanoramaFishEye  fontSize="small"/>} className={classes.chip}/>
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
                                                    <Chip color="primary" label="VS Code" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Notion" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="PDDL Parser" icon={<DataUsageOutlined fontSize="small"/>} className={classes.chip}/>
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid item xs={11}>
                                    <Card>
                                        <CardHeader
                                            title={<Typography variant="h5" className={classes.bodyH5} color="primary">Student Work Experience</Typography>} align="center"
                                            subheader={<Typography variant="h6" className={classes.bodyH6} color="secondary">McLaren Racing Limited, 5 weeks Aug 2017</Typography>}
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
                                            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: open.card5,})} onClick={handleExpandClick5} aria-expanded={open.card5} aria-label="details">
                                                <ExpandMore color="primary"/>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse className={classes.content} in={open.card5} timeout="auto" unmountOnExit>
                                            <Grid container direction="row" justify="center" >
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
                                                            <ListItemText disableTypography primary={<Typography color="primary" >Skills</Typography>}/>
                                                        </ListItem>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <Chip color="primary" label="Analysis" icon={<Autorenew fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Problem Solving" icon={<Autorenew fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Presentation" icon={<Autorenew fontSize="small"/>} className={classes.chip}/>
                                                    <Chip color="primary" label="Creativity" icon={<Autorenew fontSize="small"/>} className={classes.chip}/>
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Card>
                                </Grid>
                                <Grid container direction="column" justify="center">
                                    <Grid item xs={12}>
                                        <Button fullWidth={true} onClick={handleBigClick} color="secondary" align="center">Open All</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={0} lg={4}>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
    
}

export default ExperienceComponent;