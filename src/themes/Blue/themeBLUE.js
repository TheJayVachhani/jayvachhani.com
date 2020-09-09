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
			default: "#0F0F1A"
		},
		text:{
			primary: "#4A71FF",
			secondary: "#59B8C5",
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
				color: "#4A71FF" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#0F0F1A"
			},
			iconColorPrimary: {
				color: "#13F6EB",
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