import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#A6D1C9"
		},
		secondary: { 
			main:  "#00A19A"
		},
		background:{
			default: "#1E1F1E"
		},
		text:{
			primary: "#00A19A",
			secondary: "#A6D1C9",
		}
	},
	overrides: {
		MuiCard:{
			root: {
				backgroundColor: "#002927",
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
				color: "#00A19A"
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#313532",
				color: "#A6D1C9",
				indicatorColor: "#00A19A",
				'&:hover': {
					color:"#00A19A",
				}
			},
		},
	},
});