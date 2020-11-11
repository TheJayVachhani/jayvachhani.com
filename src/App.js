import React from 'react';
import {Route , Redirect, Switch} from 'react-router-dom';
import {MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import {ArrowLeftRounded, ArrowRightRounded} from '@material-ui/icons';
import {CssBaseline, IconButton, Box, Tooltip, Fade, Typography, Slide} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Navbar from './components/navigation/navbar';
import Footer from './components/footer/footer';

import Home from './components/home/home.js';
import Journey from './components/journey/journey.js';
import Blog from './components/blog/blog.js';
import Contact from './components/contact/contact.js';

import TAlpine from './themes/Alpine.js';
import TBMWSport from './themes/BMWSport.js';
import TMcLaren from './themes/McLaren.js';
import TMercedes from './themes/Mercedes.js';
import TSea from './themes/Sea.js';


const Alpine = responsiveFontSizes(TAlpine);
const BMWSport = responsiveFontSizes(TBMWSport);
const McLaren = responsiveFontSizes(TMcLaren);
const Mercedes = responsiveFontSizes(TMercedes);
const Sea = responsiveFontSizes(TSea);

let themeDict = {
	0: Alpine,
	1: BMWSport,
	2: McLaren,
	3: Mercedes,
	4: Sea,
};

let nameDict ={
	0: "Alpine",
	1: "BMW M Sport",
	2: "McLaren",
	3: "Mercedes",
	4: "Sea",
};

let value = 0;
let name = nameDict[value];

const appCSS = makeStyles((theme) => ({
	changeButtons:{
		maxWidth: "400px",
		margin: "auto",
		textAlign: "center"
	},
	icon:{
		fontSize: "2.0rem"
	},
	themeName:{
		fontWeight: "400",
        fontSize: "1.0rem",
        letterSpacing: "0.2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
	}
}));

const App = () => {
	const [state, setState] = React.useState({
		themeIs: value
	});

	const forwardChange = () => {
		switch(value){
			case 0: value=1; break;
			case 1: value=2; break;
			case 2: value=3; break;
			case 3: value=4; break;
			case 4: value=0; break;
			default: value=0;
		};
		name = nameDict[value];
		setState((state) => ({themeIs: value}));
	};
	const backwardChange = () => {
		switch(value){
			case 0: value=4; break;
			case 1: value=0; break;
			case 2: value=1; break;
			case 3: value=2; break;
			case 4: value=3; break;
			default: value=0;
		};
		name = nameDict[value];
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
						<Redirect exact from="/experience" to="/home"/>
						<Route exact path="/home" component={Home}/>
						<Route exact path="/journey" component={Journey}/>
						<Route exact path="/blog" component={Blog}/>
						<Route exact path="/contact" component={Contact}/>
					</Switch>
				</Box>
				<Slide in={true} direction="up" timeout={750} style={{transitionDelay: 8250}}>
					<Box component="div" className={classes.changeButtons} color="background">
						<Box component="span">
							<Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">Previous Theme</Typography>} placement="top">
								<IconButton onClick={backwardChange} aria-label="Change Theme Button" color="secondary">
									<ArrowLeftRounded className={classes.icon}/>
								</IconButton>
							</Tooltip>
						</Box>
						<Typography component="span" variant="h1" color="textSecondary" className={classes.themeName}>{name}</Typography>
						<Box component="span">
							<Tooltip TransitionComponent={Fade} TransitionProps={{timeout: 400}} title={<Typography variant="body2">Next Theme</Typography>} placement="top">
								<IconButton onClick={forwardChange} aria-label="Change Theme Button" color="secondary">
									<ArrowRightRounded className={classes.icon}/>
								</IconButton>
							</Tooltip>
						</Box>
					</Box>
				</Slide>
				<Box component="div">
					<Footer/>
				</Box>
		</MuiThemeProvider>
	);
}

export default App;