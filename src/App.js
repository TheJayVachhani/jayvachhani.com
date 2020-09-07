import React, {Component} from 'react';
import { MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import {CssBaseline, Button} from '@material-ui/core';

import Navbar from './components/navigation/navbar';
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
							<Navbar/>
						</div>
						<Button onClick={this.onChange} color="secondary">Click Me :)</Button>
					</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
