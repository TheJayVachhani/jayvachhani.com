import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#A6D1C9"
		},
		secondary: { 
			main:  "#1FB4FF"
		},
		background:{
			default: "#1E1F1E"
		},
		text:{
			primary: "#1FB4FF",
			secondary: "#A6D1C9",
		}
	},
	overrides: {
		MuiCard:{
			root: {
				backgroundColor: "#002D3D",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#E4E5E6",
			},
			subheader: {
				color: "#A6D1C9" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#1E1F1E"
			},
			iconColorPrimary: {
				color: "#1FB4FF"
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#313532",
				color: "#0096CC",
				indicatorColor: "#1FB4FF",
				'&:hover': {
					color:"#1FB4FF",
				}
			},
		},
	},
});