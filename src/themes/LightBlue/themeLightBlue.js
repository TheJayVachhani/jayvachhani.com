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
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#A6D1C9",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#1FB4FF"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#A6D1C9",
				'&:hover':{
					backgroundColor: "#313532",
					color: "#1FB4FF"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#313532"
			}
		},
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
		MuiAccordion: {
			root: {
				backgroundColor: "#002D3D"
			},
		},
	},
});