import React from 'react';
import {Grid, Card, CardHeader, CardContent, Chip, CardActions, Collapse, IconButton, Typography, Icon} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';
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
    content : {
        paddingLeft: '2%',
        paddingRight: '2%'
    },
 
  }));

  /*
    handleExpandClick1 = (expanded1) => {
        this.setState({expanded1 : expanded1})
    }
    handleExpand1 = () => {
        this.setState({expanded1: true})
    }
    handleReduce1 = () => {
        this.setState({expanded1: false})
    }
        constructor(props){
        super(props);
        this.state= {
            expanded1: false,
        }
    }
        card: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
    }
  */

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
            <div>
                <Typography variant='h6' color="primary" font>Working Experience</Typography>
                    <div>


                                <Card>
                                    <CardHeader
                                        title="Work Experience Title" align="center"
                                        subheader="Dates 2017-2020"
                                    />
                                    <CardContent>
                                        <Typography variant="body1" color="secondary" component="p" align="left">
                                            This is some description text that should offer brief information on the work experience.
                                        </Typography> 
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton 
                                            className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more" 
                                        >
                                            <ExpandMore color="primary"/>
                                        </IconButton>
                                    </CardActions>
                                    <Collapse className={classes.content} in={expanded} timeout="auto" unmountOnExit>
                                        <Typography>Method:</Typography>
                                        <Typography color="primary">
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                            minutes.
                                        </Typography>
                                        <Typography>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly

                                        </Typography>
                                        <Typography>
                                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to

                                        </Typography>
                                        <Typography>
                                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                                        </Typography>

                                    </Collapse>
                                </Card>
                    
                    
                    </div>
            </div>
        );
    
}

export default ExperienceComponent;