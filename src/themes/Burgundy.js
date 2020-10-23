import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#E8D9E0"
		},
		secondary: { 
			main: "#FFB833" 
		},
		background:{
			default: "#A3003F"
		},
		text:{
			primary: "#FFB833",
			secondary: "#E8D9E0",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#E8D9E0",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#FFB833"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#E8D9E0",
				'&:hover':{
					backgroundColor: "#00243D",
					color: "#FFB833"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#001829"
			}
		},
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
				color: "#FFB833" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#E8D9E0",
				backgroundColor: "#840032"
			},
			iconColorPrimary: {
				color: "#E59500"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#001829"
			},
		},
	},
});