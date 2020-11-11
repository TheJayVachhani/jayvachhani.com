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
			primary: "#00B5B8",
			secondary: "#E0AAFF",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#00B5B8",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#E0AAFF"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#E0AAFF",
				'&:hover':{
					backgroundColor: "#162F3C",
					color: "#00B5B8"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#151D29"
			}
		},
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
		MuiAccordion: {
			root: {
				backgroundColor: "#162F3C"
			},
		},
		MuiOutlinedInput:{
			root: {
				'& fieldset':{
					borderColor: "#00B5B8"
				},
				'&:hover fieldset':{
					borderColor: "#E0AAFF"
				}
			}
		},
	},
});