import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#0A0B0C"
		},
		secondary: { 
			main: "#12A550" 
		},
		background:{
			default: "#E4E5E6"
		},
		text:{
			primary: "#0A0B0C",
			secondary: "#313335",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#E4E5E6",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#12A550"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#0A0B0C",
				'&:hover':{
					backgroundColor: "#D5D7D5",
					color: "#12A550"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#313335"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#D5D7D5",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#0A0B0C",
			},
			subheader: {
				color: "#12A550" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#e4e5e6",
				backgroundColor: "#313335"
			},
			iconColorPrimary: {
				color: "#12A550"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#D5D7D5"
			},
		},
	},
});