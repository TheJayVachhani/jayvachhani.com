import React, { Component } from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import {MinimizeRounded} from '@material-ui/icons';
import './footer.css';

class footer extends Component {
    render() {
        return (
            <Box component="div" className="footer" color="background"> 
                <Box component="div">
                    <Typography variant='body1'>
                        <Button color="primary" target="_blank" href="https://www.linkedin.com/in/thejayvachhani/" aria-label="Linked In Profile Link">LinkedIn</Button>
                        <MinimizeRounded fontSize="small" color="secondary"/>
                        <Button color="primary" target="_blank" href="https://github.com/TheJayVachhani/" aria-label="Git Hub Profile Link">GitHub</Button>
                        <MinimizeRounded fontSize="small" color="secondary"/>
                        <Button color="primary" target="_blank" href="https://www.hackerrank.com/jay_vachhani" aria-label="Hacker Rank Profile Link">Hackerrank</Button>
                        <MinimizeRounded fontSize="small" color="secondary"/>
                        <Button color="primary" target="_blank" href="https://www.freecodecamp.org/jayvachhani" aria-label="Free Code Camp Profile Link">FreeCodeCamp</Button>
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textPrimary">
                        &copy; Copyright Jay Vachhani 2020 MIT License
                    </Typography>
                </Box>
            </Box>
        )
    };
}

export default footer
