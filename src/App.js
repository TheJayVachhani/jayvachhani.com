import React, {Component} from 'react';
import { MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { Box, AppBar, Typography, Toolbar,} from '@material-ui/core'
import {CssBaseline, Button} from '@material-ui/core';

import HeaderComponent from './components/header/header';

import themeBW from '../src/themes/BlackAndWhite/themeBW';
import themeBLUE from '../src/themes/Blue/themeBLUE';
import './App.css';

const theme1 = responsiveFontSizes(themeBW);
const theme2 = responsiveFontSizes(themeBLUE);

class App extends Component {
	state={
		themeIs: true
	}
	onChange = () => {
		this.setState((state) => ({ themeIs: !state.themeIs }));
	}

	render() {
		var {themeIs} = this.state;
    	return (
    	    <MuiThemeProvider theme={themeIs ? theme1 : theme2}>
				<CssBaseline/>
					<div>
						<Box component="nav" className="navbarContainer">
							<AppBar>
								<Toolbar>
										<Typography variant='h6'>This is a navigation bar</Typography>
								</Toolbar>
							</AppBar>
						</Box>
					</div>
					<div>
						<div>
							<HeaderComponent/>
							<Button onClick={this.onChange} color="primary">Change theme</Button>
						</div>
						<Button color="primary">
							This is a test
						</Button>
						<Button color="secondary">
							This is a test
						</Button>
					</div>

			</MuiThemeProvider>
		);
	}
}

export default App;
