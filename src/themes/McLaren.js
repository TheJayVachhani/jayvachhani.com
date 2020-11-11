import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary:{
			main: "#F5F4F4"
		},
		secondary:{ 
			main: "#FF8700"
		},
		background:{
			default: "#011F3D"
		},
		text:{
			primary: "#FF8700",
			secondary: "#F5F4F4",
		}
	},
	overrides:{
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#011F3D",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#F5F4F4"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#F5F4F4",
				'&:hover':{
					backgroundColor: "#0059A7",
					color: "#FF8700"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#FF8700"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#013365",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#F5F4F4",
			},
			subheader: {
				color: "#FF8700" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#FF8700",
				backgroundColor: "#011F3D"
			},
			iconColorPrimary: {
				color: "#F5F4F4"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#013365"
			},
		},
		MuiOutlinedInput:{
			root: {
				'& fieldset':{
					borderColor: "#FF8700"
				},
				'&:hover fieldset':{
					borderColor: "#F5F4F4"
				}
			}
		},
	},
});