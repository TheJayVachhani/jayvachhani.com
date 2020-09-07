import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#0A0B0C"
		},
		secondary: { 
			main: "#62666A" 
		},
		background:{
			default: "#E4E5E6"
		},
	},
	overrides: {
		MuiToolbar: {
			root: {
				color: "#0A0B0C",
				background: "#e4e5e6"
			},
		},
		MuiCard:{
			root: {
				backgroundColor: "#E4e5e6",
			}
		}
	},
});