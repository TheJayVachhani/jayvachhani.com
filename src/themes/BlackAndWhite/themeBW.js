import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#0A0B0C"
		},
		secondary: { 
			main: "#16C25D" 
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
		},
		MuiCardHeader:{
			title:{
				color: "#0A0B0C",
			},
			subheader: {
				color: "#313335" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#313335"
			},
			iconColorPrimary: {
				color: "#16C25D"
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#313335",
				color: "#e4e5e6",
				indicatorColor: "#16C25D",
			},
		},
		MuiTabPanel: {
			root:{
				backgroundColor: "#e4e5e6"
			}
		}
	},
});