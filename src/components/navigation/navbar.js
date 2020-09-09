import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import './navbar.css';

import Experience from '../experience/experience';
import Home from '../home/home';
import Contact from '../contact/contact';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box>
                <Typography component="span" >{children}</Typography>
            </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function Props(index) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navbar(){
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <AppBar position="sticky" >
                <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="All Navigation Tabs">
                <Tab aria-label="Home" label="Home" {...Props(0)} />
                <Tab aria-label="Experience" label="Experience" {...Props(1)} />
                <Tab aria-label="About" label="About" {...Props(2)} />
                <Tab aria-label="Contact" label="Contact" {...Props(3)}/>
                </Tabs>
            </AppBar>
            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
                <div>
                    <Home/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="experience-container">
                    <Experience/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div>
                    <Contact/>
                </div>
            </TabPanel>
            </SwipeableViews>
        </div>
    )
}

