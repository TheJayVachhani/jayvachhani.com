import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary:{
			main: "#F5F4F4"
		},
		secondary:{ 
			main: "#E06100"
		},
		background:{
			default: "#017A4B"
		},
		text:{
			primary: "#E06100",
			secondary: "#F5F4F4",
		}
	},
	overrides:{
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#F5F4F4",
				'&:hover':{
					backgroundColor: "#F5F4F4",
					color: "#0F539A"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#F5F4F4",
				'&:hover':{
					backgroundColor: "#F5F4F4",
					color: "#0F539A"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#E06100"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#00662C",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#F5F4F4",
			},
			subheader: {
				color: "#E06100" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#E06100",
				backgroundColor: "#0F539A"
			},
			iconColorPrimary: {
				color: "#F5F4F4"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#00662C"
			},
		},
	},
});