import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#E0AAFF"
		},
		secondary: { 
			main:  "#00B5B8"
		},
		background:{
			default: "#151D29"
		},
		text:{
			primary: "#E0AAFF",
			secondary: "#00B5B8",
		}
	},
	overrides: {
		MuiCard:{
			root: {
				backgroundColor: "#162F3C",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#E4E5E6",
			},
			subheader: {
				color: "#00B5B8" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#1B2636"
			},
			iconColorPrimary: {
				color: "#00B5B8"
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#11232D",
				color: "#00B5B8",
				indicatorColor: "#00F1F5",
				'&:hover': {
					color:"#00F1F5",
				}
			},
		},
	},
});