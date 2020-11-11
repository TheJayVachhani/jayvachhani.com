import React from 'react';
import axios from 'axios';
import {Typography, Button, Grid, Box, FormControl, InputLabel, OutlinedInput} from '@material-ui/core';
import {SendRounded} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const contactCSS = makeStyles((theme) => ({
    contactContainer:{
        position: "relative",
        margin: "auto",
        padding: "10vh 0 10vh 0",
        width: "350px",
        textAlign: "center"
    },
    contactH3:{
        textTransform: "capitalize",
        fontWeight: "400",
        letterSpacing: "2px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    textField:{
        padding:"0 0 1vh 0"
    },
}))

const ContactComponent = () => {

    const [state, setState] = React.useState({
        name: "",
        email: "",
        message: ""
    })

    const handleForm = (e) => {
        axios.post(
            "https://formcarry.com/s/q3501u6i_",
            state,
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
        setState({name: "", email: "", message: ""})
    }

    const handleFields = (e) => {
        setState({ [e.target.name]: e.target.value })
    }

    const classes = contactCSS();
    return (
        <Box component="div" className={classes.contactContainer}>
            <Box component="div" className="contact">
                <Grid container justify="center" direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" color="primary" className={classes.contactH3}>Let's Talk</Typography>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <Box component="form" onSubmit={handleForm}>
                            <FormControl required fullWidth variant="outlined" className={classes.textField}>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <OutlinedInput
                                    id="name"
                                    type="name"
                                    value={state.name}
                                    onChange={handleFields}
                                    labelWidth={50}
                                    placeholder="Bugs B Bunny"
                                    size="medium"
                                />
                            </FormControl>
                            <FormControl required fullWidth variant="outlined" className={classes.textField}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    type="email"
                                    value={state.email}
                                    onChange={handleFields}
                                    labelWidth={115}
                                    placeholder="whatsUp@Doc?.com"
                                    size="medium"
                                    
                                />
                            </FormControl>
                            <FormControl required fullWidth variant="outlined" className={classes.textField}>
                                <InputLabel htmlFor="text">Message</InputLabel>
                                <OutlinedInput
                                    id="message"
                                    type="text"
                                    value={state.message}
                                    onChange={handleFields}
                                    labelWidth={78}
                                    placeholder="I really like your website!" 
                                    multiline 
                                    rows={4}
                                    margin="dense"
                                    size="medium"
                                />
                            </FormControl>
                            <Button type="submit" fullWidth={true} color="secondary" variant="text" endIcon={<SendRounded fontSize="small" color="secondary"/>}>
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
export default ContactComponent