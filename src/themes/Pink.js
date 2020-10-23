import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#282B29"
		},
		secondary: { 
			main:  "#E83C38"
		},
		background:{
			default: "#FCEEEE"
		},
		text:{
			primary: "#E83C38",
			secondary: "#282B29",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#F2BABA",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#E83C38"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#282B29",
				'&:hover':{
					backgroundColor: "#F2BABA",
					color: "#E83C38"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#282B29"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#F2BABA",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#E4E5E6",
			},
			subheader: {
				color: "#E83C38" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#282B29"
			},
			iconColorPrimary: {
				color: "#E83C38"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#F2BABA"
			},
		},
	},
});