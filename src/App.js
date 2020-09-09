import React, {Component} from 'react';
import {MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import {LensRounded, MinimizeRounded, PanoramaFishEyeRounded} from '@material-ui/icons';
import {CssBaseline, IconButton, Box, Button, Typography} from '@material-ui/core';

import Navbar from './components/navigation/navbar';
import themeBlackGreen from './themes/BlackGreen/themeBlackGreen.js';
import themeBlue from './themes/Blue/themeBlue.js';
import themeSea from './themes/Sea/themeSea.js';
import themeRed from './themes/Red/themeRed.js';
import './App.css';


const theme1 = responsiveFontSizes(themeBlackGreen);
const theme2 = responsiveFontSizes(themeRed);
const theme3 = responsiveFontSizes(themeSea);
const theme4 = responsiveFontSizes(themeBlue);

let themeDict = { 
	0: theme1,
	1: theme2,
	2: theme3,
	3: theme4
}
let value = 0;

class App extends Component {
	state={
		themeIs: themeDict[value]
	}
	onChange = () => {
		switch(value){
			case 0: value=1; break;
			case 1: value=2; break;
			case 2: value=3; break;
			case 3: value=0; break;
			default: value=0;
		}
		this.setState(({ themeIs: themeDict[value]}));
	}
	backtoNormal = () => {
		value=0;
		this.setState(({ themeIs: themeDict[value]}));
	}

	render() {
		var {themeIs} = this.state;
    	return (
    	    <MuiThemeProvider theme={(themeIs)}>
				<CssBaseline/>
					<div>
						<div>
							<Navbar/>
						</div>
						<div>
						<Box component="div" className="footer" color="background"> 
							<Box component="div">
								<Typography variant='body1'>
									<IconButton onClick={this.onChange} title="Change Theme" aria-label="Change Theme Button" color="secondary">
										<LensRounded/>
									</IconButton>
									<Button color="primary" target="_blank" href="https://www.linkedin.com/in/thejayvachhani/" aria-label="Linked In Profile Link">LinkedIn</Button>
									<MinimizeRounded fontSize="small" color="secondary"/>
									<Button color="primary" target="_blank" href="https://github.com/TheJayVachhani/" aria-label="Git Hub Profile Link">GitHub</Button>
									<MinimizeRounded fontSize="small" color="secondary"/>
									<Button color="primary" target="_blank" href="https://www.hackerrank.com/jay_vachhani" aria-label="Hacker Rank Profile Link">Hackerrank</Button>
									<MinimizeRounded fontSize="small" color="secondary"/>
									<Button color="primary" target="_blank" href="https://www.freecodecamp.org/jayvachhani" aria-label="Free Code Camp Profile Link">FreeCodeCamp</Button>
									<IconButton onClick={this.backtoNormal} title="Starting Theme" aria-label="Starting Theme" color="primary">
										<PanoramaFishEyeRounded/>
									</IconButton>
								</Typography>
								<br/>
								<Typography variant="body2" color="textPrimary">
									&copy; Copyright Jay Vachhani 2020 MIT License
								</Typography>
							</Box>
						</Box>
						</div>
					</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
