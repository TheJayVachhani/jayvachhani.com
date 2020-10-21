import React from 'react';
import {RemoveRounded} from '@material-ui/icons';
import {Box, Button, Typography, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const footerCSS = makeStyles((theme) => ({
    footer:{
        maxWidth: "345px",
        margin: "auto",
        textAlign: "center",
        padding: "0 0 1vh 0",
    },
    copyright:{
        padding: "0 0 3vh 0",
        margin: "auto",
        textAlign: "center",
    },
    copyrightH6:{
        fontWeight: "400",
        fontSize: "0.9rem",
        letterSpacing: "0.05rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    }
}));

function currentYear(){
    var d = new Date();
    return d.getFullYear();
}

let thisYear = currentYear();

const FooterComponent = () => {
    const classes = footerCSS();
    return (
        <div>
            <Box component="div" className={classes.footer} color="background">
                <Grid container justify="center"  direction="row" alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center"  direction="row" alignItems="center">
                            <Grid item xs={5}>
                                <Grid container justify="center"  direction="column" alignItems="flex-end">
                                    <Grid item xs={12}>
                                        <Button  color="primary" target="_blank" href="https://www.linkedin.com/in/thejayvachhani/" aria-label="Linked In Profile Link">LinkedIn</Button>													
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  color="primary" target="_blank" href="https://www.freecodecamp.org/jayvachhani" aria-label="Free Code Camp Profile Link">FreeCodeCamp</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1}>
                                <Grid container justify="flex-start" spacing={2}  direction="column" alignItems="center">
                                    <Grid item xs={12}>
                                        <RemoveRounded fontSize="small" color="secondary"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RemoveRounded fontSize="small" color="secondary"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <Grid container justify="center"  direction="column" alignItems="flex-start">
                                    <Grid item xs={12}>
                                        <Button  color="primary" target="_blank" href="https://github.com/TheJayVachhani/" aria-label="Git Hub Profile Link">GitHub</Button>													
                                    </Grid>
                                    <Grid item xs={12}>											
                                        <Button  color="primary" target="_blank" href="https://www.hackerrank.com/jay_vachhani" aria-label="Hacker Rank Profile Link">Hackerrank</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box component="div" className={classes.copyright}>
                <Typography variant="h6" color="secondary" className={classes.copyrightH6}>
                    &copy; Copyright Jay Vachhani {thisYear}
                </Typography>
            </Box>
        </div>
    );
};

export default FooterComponent;
