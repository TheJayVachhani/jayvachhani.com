import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#DCE0E9"
		},
		secondary: { 
			main: "#34D1BF" 
		},
		background:{
			default: "#090A0C"
		},
		text:{
			primary: "#34D1BF",
			secondary: "#DCE0E9",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#090A0C",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#DCE0E9"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#DCE0E9",
				'&:hover':{
					backgroundColor: "#121317",
					color: "#34D1BF"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#00CCC2"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#121317",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#DCE0E9",
			},
			subheader: {
				color: "#34D1BF" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#090A0C",
				backgroundColor: "#DCE0E9"
			},
			iconColorPrimary: {
				color: "#34D1BF"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#121317"
			},
		},
		MuiOutlinedInput:{
			root: {
				'& fieldset':{
					borderColor: "#34D1BF"
				},
				'&:hover fieldset':{
					borderColor: "#DCE0E9"
				}
			}
		},
	},
});