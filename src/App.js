import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {CssBaseline, Button} from '@material-ui/core';
import HeaderComponent from './components/header/header';

import themeBW from '../src/themes/BlackAndWhite/themeBW';
import themeBLUE from '../src/themes/Blue/themeBLUE';
import './App.css';

let theme1 = createMuiTheme(themeBW);
theme1 = responsiveFontSizes(theme1);
let theme2 = createMuiTheme(themeBLUE);
theme2 = responsiveFontSizes(theme2);

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
					<Button onClick={this.onChange}>Change theme</Button>
					<div>
						<div>
							<HeaderComponent></HeaderComponent>
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
