import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#FFCC80"
		},
		secondary: { 
			main:  "#8d80ff"
		},
		background:{
			default: "#0F0F1A"
		},
		text:{
			primary: "#8d80ff",
			secondary: "#FFCC80",
		}
	},
	overrides: {
		MuiCard:{
			root: {
				backgroundColor: "#161627"
			}
		},
		MuiCardHeader:{
			title:{
				color: "#E4E5E6",
			},
			subheader: {
				color: "#8d80ff" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#0F0F1A"
			},
			iconColorPrimary: {
				color: "#8d80ff",
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#161627",
				color: "#8d80ff",
				'&:hover': {
					color:"#4A71FF",
				}
			},
		},
	},
});