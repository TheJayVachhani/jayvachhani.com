import React, {Component} from 'react';
import {Route , Redirect, Switch} from 'react-router-dom';
import {MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import {Brightness7Rounded} from '@material-ui/icons';
import {CssBaseline, IconButton, Box} from '@material-ui/core';

import Navbar from './components/navigation/navbar';
import Footer from './components/footer/footer';
import themeBlackGreen from './themes/BlackGreen/themeBlackGreen.js';
import themeBurgundy from './themes/Burgundy/themeBurgundy.js';
import themeSea from './themes/Sea/themeSea.js';
import themePink from './themes/Pink/themePink';
import themeLightBlue from './themes/LightBlue/themeLightBlue.js';
import './App.css';

const theme1 = responsiveFontSizes(themeLightBlue);
const theme2 = responsiveFontSizes(themeSea);
const theme3 = responsiveFontSizes(themeBlackGreen);
const theme4 = responsiveFontSizes(themePink);
const theme5 = responsiveFontSizes(themeBurgundy);

let themeDict = { 
	0: theme1,
	1: theme2,
	2: theme3,
	3: theme4,
	4: theme5,
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
			case 3: value=4; break;
			case 4: value=0; break;
			default: value=0;
		}
		this.setState(({ themeIs: themeDict[value]}));
	}

	render() {
		var {themeIs} = this.state;
    	return (
    	    <MuiThemeProvider theme={(themeIs)}>
				<CssBaseline/>
					<div>						
						<Box component="div">
							<Switch>
								<Redirect exact from="/" to="/home"/>
								<Route exact path="/:page?" render={props => <Navbar {...props}/>} />
							</Switch>
						</Box>
						<Box component="div" className="change-buttons" color="background"> 
							<IconButton onClick={this.onChange} title="Change Theme" aria-label="Change Theme Button" color="secondary">
								<Brightness7Rounded style={{ fontSize: 35 }}/>
							</IconButton>
						</Box>
						<Box component="div">
							<Footer/>
						</Box>
					</div>
			</MuiThemeProvider>
		);
	}
}

export default App;