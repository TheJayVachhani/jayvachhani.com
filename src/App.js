import React, {Component} from 'react';
import { MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar,} from '@material-ui/core'
import {CssBaseline, Button} from '@material-ui/core';

import Header from './components/header/header';
import Experience from './components/experience/experience';

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
						<div>
							<Header/>
						</div>
						<div className="section-container"> 
							<Experience/>
						</div>
						<div>
							<Box component="nav" className="navbarContainer">
								<AppBar>
									<Toolbar>
											<section>
												<Button onClick={this.onChange} color="secondary">Change theme</Button>
											</section>
											<section className="navigation">
												<Button color="Primary">Experience</Button>
											</section>

									</Toolbar>
								</AppBar>
							</Box>
						</div>
					</div>

			</MuiThemeProvider>
		);
	}
}

export default App;
