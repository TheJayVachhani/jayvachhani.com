import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#59B8C5"
		},
		secondary: { 
			main:  "#4A71FF"
		},
		background:{
			default: "#161627"
		}
	},
	overrides: {
		MuiToolbar: {
			root: {
				color: "#0A0B0C",
				background: "#e4e5e6"
			},
		},
	},
});