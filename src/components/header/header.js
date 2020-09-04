import React, {Component} from 'react';
import {Typography, Box, Grid} from '@material-ui/core';
import Typed from 'react-typed';
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }


    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
			<Box component="div" className="header-wrapper" style={{"height": this.state.height}}>
				<Box component="div" className="header">
					<Grid container justify="center" direction="column">
						<Grid item xs={12}>
							<Typography variant='h3' color="primary">Jay Vachhani</Typography>
							<Typography variant='h6' color="primary">
								Computer Science and Management
							</Typography>
						</Grid>
						<br/>
						<Grid container justify="center" direction="column" >
							<Grid item xs={12} align="center">
								<Typography variant='h6' color="secondary">
									<Typed strings={["Web Development", "Full Stack Learner", "Data Science", "Global Markets", "AI + Machine Learning",]} typeSpeed={30} backSpeed={30} loop/>
								</Typography>
							</Grid>
							<Grid item xs={12} align="center">
								<Typography variant='h6' color="secondary">
									<Typed strings={["JavaScript", "HTML + CSS", "REACT","Python", "SQL", "Java", "Scala", "C++", "PDDL", "LaTeX"]} typeSpeed={50} backSpeed={50} loop/>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
        );
    }
}

export default HeaderComponent;