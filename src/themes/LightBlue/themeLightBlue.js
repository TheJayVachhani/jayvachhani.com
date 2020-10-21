import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#E4F1EF"
		},
		secondary: { 
			main:  "#1FB4FF"
		},
		background:{
			default: "#1E1F1E"
		},
		text:{
			primary: "#1FB4FF",
			secondary: "#E4F1EF",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#E4F1EF",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#1FB4FF"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#E4F1EF",
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
				color: "#E4F1EF" ,
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