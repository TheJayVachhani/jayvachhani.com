import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
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
			<div className="header-wrapper" style={{"height": this.state.height}}>
				<div className="header">
				<Typography variant='h3' color="primary">Name Name</Typography>
				<Typography variant='h6' color="secondary">Things about me</Typography>
				</div>
			</div>
        );
    }
}

export default HeaderComponent;