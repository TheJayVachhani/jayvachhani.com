import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#001427"
		},
		secondary: { 
			main: "#BF0603" 
		},
		background:{
			default: "#FFF3B0"
		},
		text:{
			primary: "#001427",
			secondary: "#0A0B0C",
		}
	},
	overrides: {
		MuiCard:{
			root: {
				backgroundColor: "#FFF099",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#001427",
			},
			subheader: {
				color: "#BF0603",
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#E4E5E6",
				backgroundColor: "#001427"
			},
			iconColorPrimary: {
				color: "#BF0603"
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#001427",
				color: "#FFF3B0",
				indicatorColor: "#E53B38",
				'&:hover': {
					color:"#FB120E",
				}
			},
		},
	},
});