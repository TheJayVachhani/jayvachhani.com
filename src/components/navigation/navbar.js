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

export default function Navbar(props){
    const { match, history } = props;
    const {params} = match;
    const {page} = params;
    const theme = useTheme();
    
    const tabNameToIndex = {
        0: "home",
        1: "experience",
        2: "about",
        3: "contact"
    }

    const indexToTabName = {
        home: 0,
        experience: 1,
        about: 2,
        contact: 3
    }
    
    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
  
    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };

    const handleChangeIndex = (index) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <AppBar position="sticky" >
                <Tabs value={selectedTab} onChange={handleChange} variant="fullWidth" aria-label="All Navigation Tabs">
                <Tab aria-label="Home" label="Home" {...Props(0)} />
                <Tab aria-label="Experience" label="Experience" {...Props(1)} />
                <Tab aria-label="About" label="About" {...Props(2)} />
                <Tab aria-label="Contact" label="Contact" {...Props(3)}/>
                </Tabs>
            </AppBar>
            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={selectedTab} onChangeIndex={handleChangeIndex}>
            <TabPanel>
                {selectedTab === 0 && <Home/>}
            </TabPanel>
            <TabPanel>
                <div className="experience-container">
                    {selectedTab === 1 && <Experience/>}
                </div>
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
                Item Three
            </TabPanel>
            <TabPanel>
                {selectedTab === 3 && <Contact/>}
            </TabPanel>
            </SwipeableViews>
        </div>
    )
}

