import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import HeaderComponent from './components/header/header';

import themeBW from '../src/themes/BlackAndWhite/themeBW';
import themeBLUE from '../src/themes/Blue/themeBLUE';
import './App.css';

const theme1 = createMuiTheme(themeBW);
const theme2 = createMuiTheme(themeBLUE);

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
