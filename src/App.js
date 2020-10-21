import React from 'react';
import {Route , Redirect, Switch} from 'react-router-dom';
import {MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import {Brightness7Rounded} from '@material-ui/icons';
import {CssBaseline, IconButton, Box, Tooltip, Fade, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Navbar from './components/navigation/navbar';
import Footer from './components/footer/footer';

import Home from './components/home/home.js';
import Experience from './components/experience/experience.js';
import Notes from './components/notes/notes.js';
import Contact from './components/contact/contact.js';

import themeBlackGreen from './themes/BlackGreen/themeBlackGreen.js';
import themeBurgundy from './themes/Burgundy/themeBurgundy.js';
import themeSea from './themes/Sea/themeSea.js';
import themePink from './themes/Pink/themePink';
import themeLightBlue from './themes/LightBlue/themeLightBlue.js';

const theme1 = responsiveFontSizes(themeLightBlue);
const theme2 = responsiveFontSizes(themeSea);
const theme3 = responsiveFontSizes(themeBlackGreen);
const theme4 = responsiveFontSizes(themeBurgundy);
const theme5 = responsiveFontSizes(themePink); 

let themeDict = { 
	0: theme1,
	1: theme2,
	2: theme3,
	3: theme4,
	4: theme5,
}
let value = 0;

const appCSS = makeStyles((theme) => ({
	changeButtons:{
		maxWidth: "400px",
		margin: "auto",
		textAlign: "center"
	},
	icon:{
		fontSize: "35px"
	}
}));

const App = () => {
	const [state, setState] = React.useState({
		themeIs: value
	});

	const themeChange = () => {
		switch(value){
			case 0: value=1; break;
			case 1: value=2; break;
			case 2: value=3; break;
			case 3: value=4; break;
			case 4: value=0; break;
			default: value=0;
		};
		setState((state) => ({themeIs: value}));
	};

	const classes = appCSS();
	return (
		<MuiThemeProvider theme={themeDict[state.themeIs]}>
			<CssBaseline/>			
				<Navbar/>			
				<Box component="div">
					<Switch>
						<Redirect exact from="/" to="/home"/>
						<Route exact path="/home" component={Home}/>
						<Route exact path="/experience" component={Experience}/>
						<Route exact path="/notes" component={Notes}/>
						<Route exact path="/contact" component={Contact}/>
					</Switch>
				</Box>
				<Box component="div" className={classes.changeButtons} color="background"> 
					<Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">Change Theme</Typography>} placement="top">
						<IconButton onClick={themeChange} aria-label="Change Theme Button" color="secondary">
							<Brightness7Rounded className={classes.icon}/>
						</IconButton>
					</Tooltip>
				</Box>
				<Box component="div">
					<Footer/>
				</Box>
		</MuiThemeProvider>
	);
}

export default App;