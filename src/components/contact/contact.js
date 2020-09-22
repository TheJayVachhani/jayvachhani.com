import React from 'react';
import axios from 'axios';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import {SendRounded} from '@material-ui/icons';
import './contact.css';

class ContactComponent extends React.Component {
    state={
        name: "", 
        email: "", 
        message: ""
    }

    handleForm = (e) => {
        axios.post(
            "https://formcarry.com/s/q3501u6i_",
            this.state,
            {headers : {"Accept": "application/json"}}
        )
        .then(function (response) {
            let successMessage = document.querySelector('.success-message');
            successMessage.innerHTML = JSON.stringify(response.data.title);
        })
        .catch(function (error){
            let errorMessage = document.querySelector('.error-message');
            errorMessage.innerHTML = JSON.stringify(error);
        })

        e.preventDefault();
        this.setState({name: '', email: '', message: ""})
    }

    handleFields = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Box component="div" className="contact-wrapper">
                <Box component="div" className="contact">
                    <Grid container justify="center" direction="column">
                        <Grid item xs={12}>
                            <Typography variant="h3" color="primary">Contact Me</Typography>
                        </Grid>
                        <br/>
                        <Grid item xs={12}>
                            <Box component="form" onSubmit={this.handleForm}>
                                <TextField required fullWidth={true} type="text" name="name" id="name" label="Name"  onChange={this.handleFields} value={this.state.name} placeholder="Bugs B Bunny" variant="outlined" color="primary" margin="dense" size="medium"/>
                                <TextField required fullWidth={true} type="email" name="email" id="email" label="Email"  onChange={this.handleFields} value={this.state.email} placeholder="whatsUp@Doc?.com" variant="outlined" color="primary" margin="dense" size="medium"/>
                                <TextField required fullWidth={true} type="text" name="message" id="message" label="Message" onChange={this.handleFields} value={this.state.message}placeholder="I really like your website!" multiline rows={4} variant="outlined" color="primary" margin="dense" size="medium"/>
                                <Button type="submit" fullWidth={true} color="primary" endIcon={<SendRounded fontSize="small" color="secondary"/>}>
                                    Send
                                </Button>
                                <Box component="div" className="success-message">
                                    <label></label>
                                </Box>
                                <Box component="div" className="error-message">
                                    <label></label>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        );
    }
}
export default ContactComponent