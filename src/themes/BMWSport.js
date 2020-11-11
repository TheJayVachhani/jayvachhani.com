import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#2D4046"
		},
		secondary: { 
			main: "#E32211" 
		},
		background:{
			default: "#FFFDFE"
		},
		text:{
			primary: "#003A79",
			secondary: "#2D4046",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#FFFDFE",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#E32211"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#2D4046",
				'&:hover':{
					backgroundColor: "#003A79",
					color: "#FFFDFE"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#2D4046"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#D7D7D7",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#FFFDFE",
			},
			subheader: {
				color: "#0066B2" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#FFFDFE",
				backgroundColor: "#2D4046"
			},
			iconColorPrimary: {
				color: "#E32211"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#D7D7D7"
			},
		},
		MuiOutlinedInput:{
			root: {
				'& fieldset':{
					borderColor: "#003A79"
				},
				'&:hover fieldset':{
					borderColor: "#E32211"
				}
			}
		},
	},
});