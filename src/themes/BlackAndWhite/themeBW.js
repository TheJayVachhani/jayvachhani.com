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
				background: "#E4E5E6"
			},
		},
		MuiCard:{
			root: {
				backgroundColor: "#D5D7D5",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#0A0B0C",
			},
			subheader: {
				color: "#16C25D" ,
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
				'&:hover': {
					color:"#78E2A5",
				}
			},
		},
	},
});