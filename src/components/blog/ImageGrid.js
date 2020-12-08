import React from 'react';
import {Grid, Box, Fade, Typography, GridList, GridListTile, GridListTileBar, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import BoliviaSalt from "./images/Bolivia-Salt-Flats.png";
import BoliviaRail from './images/Bolivia-Abandoned-Railway.png';
import BoliviaMnT from './images/Bolivia-MtTarija.png';
import BrightonSea from './images/Brighton-Sea-Sunset.png';
import GermanySpeyer from './images/Speyer-Quiet-Street.png';
import SwissGlacier from './images/Zermatt-Glacier.png';
import SwissLodge from './images/Zermatt-Lodge.png';

const imageData = [
    {label: 'Bolivia - Condoriri', imgPath: BoliviaMnT, featured: true},
    {label: 'Switzerland - Zermatt Glacier', imgPath: SwissGlacier},
    {label: 'Germany - Speyer', imgPath: GermanySpeyer},
    {label: 'Switzerland - Lodge in Zermatt', imgPath: SwissLodge, featured: true},
    {label: 'Bolivia - Salar de Uyuni', imgPath: BoliviaSalt},
    {label: 'Bolivia - Uyuni Railway', imgPath: BoliviaRail},
    {label: 'UK - Brighton', imgPath: BrightonSea, featured: true},
];

const imgCSS = makeStyles((theme) => ({
    imgH4:{
        textTransform: "capitalize",
        fontWeight: "400",
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    imageContainer:{
        margin: "auto",
        maxWidth: "75%",
        maxHeight: "40%",
        paddingTop: "1%",
        textAlign: "center",
        overflow: "hidden"
    },
    image:{
        display: "block",
        width: "80%",
        margin: "auto",
        overflow: "hidden"
    },
    gridList: {
        margin: "auto",
        width: "100%",
        height: "100%",
        transform: 'translateZ(0)',
    },
    titleBar:{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.5) 0%, ' +
          'rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
    },
}))

const ImageGridComponent = () => {
    const classes = imgCSS();
    return (
        <Box component="div" className={classes.imageContainer}>
            <Grid container justify="center" spacing={1} direction="column" alignItems="center">
                <Hidden mdDown>
                    <Grid item xs={false} lg={10}>
                        <Fade in={true} timeout={500} style={{transitionDelay: 2000}}>
                            <Typography variant="h4" className={classes.imgH4} color="primary" >
                                I Like to Take Photos Too.
                            </Typography>
                        </Fade>
                    </Grid>
                    <Grid item lg={9}>
                        <GridList cellHeight={150} spacing={1} className={classes.gridList}>
                            {imageData.map((image) => (
                                <GridListTile key={image.imgPath} cols={image.featured ? 2 : 1} rows={image.featured ? 3 : 2}>
                                    <img src={image.imgPath} alt={image.label} />
                                    <GridListTileBar
                                        title={image.label}
                                        titlePosition="bottom"
                                        className={classes.titleBar}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Hidden>
            </Grid>
        </Box>
    );
};

export default ImageGridComponent
