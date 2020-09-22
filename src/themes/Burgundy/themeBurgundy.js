import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#E4E5E6"
		},
		secondary: { 
			main: "#FFB01F" 
		},
		background:{
			default: "#8F0037"
		},
		text:{
			primary: "#FFB01F",
			secondary: "#E4E5E6",
		}
	},
	overrides: {
		MuiCard:{
			root: {
				backgroundColor: "#001829",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#02040F",
			},
			subheader: {
				color: "#FFB01F" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#E4E5E6",
				backgroundColor: "#840032"
			},
			iconColorPrimary: {
				color: "#E59500"
			},
		},
		MuiTabs: {
			root:{
				backgroundColor: "#001829",
				color: "#E4E5E6",
				indicatorColor: "#FFB01F",
				'&:hover': {
					color:"#FFB01F",
				}
			},
		},
	},
});