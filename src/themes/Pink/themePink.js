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
			default: "#F4C4C4"
		},
		text:{
			primary: "#E83C38",
			secondary: "#282B29",
		}
	},
	overrides: {
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
		MuiTabs: {
			root:{
				backgroundColor: "#282B29",
				color: "#F4C4C4",
				indicatorColor: "#F4C4C4",
				'&:hover': {
					color:"#E77A7A",
				}
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#F2BABA"
			},
		},
	},
});