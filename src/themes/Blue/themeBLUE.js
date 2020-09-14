import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#FFCC80"
		},
		secondary: { 
			main:  "#59B8C5"
		},
		background:{
			default: "#0F0F1A"
		},
		text:{
			primary: "#59B8C5",
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
				color: "#59B8C5" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#0F0F1A"
			},
			iconColorPrimary: {
				color: "#59B8C5",
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#161627",
				color: "#59B8C5",
				'&:hover': {
					color:"#4A71FF",
				}
			},
		},
	},
});