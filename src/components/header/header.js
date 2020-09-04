import React, {Component} from 'react';
import {Typography, Box} from '@material-ui/core';
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
				<Typography variant='h3' color="primary">Jay Vachhani</Typography>
				<Typography variant='h6' color="secondary">Computer Science and Management</Typography>
				</Box>
			</Box>
        );
    }
}

export default HeaderComponent;