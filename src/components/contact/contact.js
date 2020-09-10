import React from 'react';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import {SendRounded} from '@material-ui/icons';
import './contact.css';


const ContactComponent = () => {
    return (
        <Box component="div" className="contact-wrapper">
            <Box component="div" className="contact">
                <Grid container justify="center" direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" color="primary">Contact Me</Typography>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <Box component="form">
                            <TextField fullWidth={true} label="Name"  placeholder="Bugs B Bunny"variant="outlined" color="primary" margin="dense" size="medium"/>
                            <TextField fullWidth={true} label="Email"  placeholder="whatsUp@Doc?.com"variant="outlined" color="primary"margin="dense" size="medium"/>
                            <TextField fullWidth={true} label="Message" placeholder="I really like your website!" multiline rows={4} variant="outlined" color="primary" margin="dense" size="medium"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth={true} color="primary" endIcon={<SendRounded fontSize="small" color="secondary"/>}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default ContactComponent
