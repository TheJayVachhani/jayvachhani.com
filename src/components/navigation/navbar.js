import React from 'react';
import {AppBar, Button, Toolbar, Typography, Grid, Slide } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const navbarCSS = makeStyles((theme) => ({
    bar:{
        position: "sticky",
        width: "100%",
        height: "65px",
        margin: "0"
    },
    grid:{
        width: "100%",
        margin: "auto",
    },
    button:{
        width: "100%",
        height: "55px",
        margin: "auto",
    },
    buttonText:{
        fontSize: "1.2rem",
        fontWeight: "400",
        textTransform: "capitalize",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        verticalAlign: "middle",
        lineHeight: "55px",
        textAlign: "center"
    }
}));

const mainNavbar = () => {
    const classes = navbarCSS();
    return (
        <Slide in={true} direction="down" timeout={750} style={{transitionDelay: 8250}}>
            <AppBar className={classes.bar} color="primary">
                <Toolbar disableGutters={true}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={3} lg={2}>
                            <Button component={Link} to="/home" color="primary" variant="text" className={classes.button}>
                                <Typography variant="h5" className={classes.buttonText}>Home</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={3} lg={2}>
                            <Button component={Link} to="/experience" color="primary" variant="text" className={classes.button}>
                                <Typography variant="h5" className={classes.buttonText}>Experience</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={3} lg={2}>
                            <Button component={Link} to="/notes" color="primary" variant="text" className={classes.button}>
                                <Typography variant="h5" className={classes.buttonText}>Notes</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={3} lg={2}>
                            <Button component={Link} to="/contact" color="primary" variant="text" className={classes.button}>
                                <Typography variant="h5" className={classes.buttonText}>Contact</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}

export default mainNavbar
