import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  	palette: {
		primary: {
			main: "#EBEBEB"
		},
		secondary: { 
			main: "#36C7FC" 
		},
		background:{
			default: "#01274E"
		},
		text:{
			primary: "#36C7FC",
			secondary: "#EBEBEB",
		}
	},
	overrides: {
		MuiButton:{
			textPrimary:{
				backgroundColor: "transparent",
				color: "#0F75A5",
				'&:hover':{
					backgroundColor: "transparent",
					color: "#FA0100"
				}
			},
			textSecondary:{
				backgroundColor: "transparent",
				color: "#EBEBEB",
				'&:hover':{
					backgroundColor: "#EBEBEB",
					color: "#FA0100"
				}
			}
		},
		MuiAppBar:{
			colorPrimary:{
				backgroundColor: "#EBEBEB"
			}
		},
		MuiCard:{
			root: {
				backgroundColor: "#084E7A",
			}
		},
		MuiCardHeader:{
			title:{
				color: "#EBEBEB",
			},
			subheader: {
				color: "#36C7FC" ,
			}
		},
		MuiChip: {
			colorPrimary: {
				color: "#EBEBEB",
				backgroundColor: "#353432"
			},
			iconColorPrimary: {
				color: "#36C7FC"
			},
		},
		MuiAccordion: {
			root: {
				backgroundColor: "#084E7A"
			},
		},
		MuiOutlinedInput:{
			root: {
				'& fieldset':{
					borderColor: "#36C7FC"
				},
				'&:hover fieldset':{
					borderColor: "#EBEBEB"
				}
			}
		},
	},
});