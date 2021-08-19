import React, { useState } from 'react';

import  { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


import useStyles from './styles';

const Header = ({setCoordinates}) => {
 
    const classes = useStyles();

    const [autocomplete, setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng});
    }
    return(
        <AppBar position="static">
            {/* <Paper variant="outlined">
                    <img src="src\components\Header\lumoso_logo.png" alt="logo"/>
                </Paper> */}
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    {(<img id="logo" src="https://image.flaticon.com/icons/png/128/2200/2200326.png" alt="logo"/>)}
                    Lumoso
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore New Places
                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="search" 
                        classes={{root: classes.inputRoot, input: classes.inputInput}} 
                        style={{fontFamily: "fantasy"}} 
                        />
                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>

        </AppBar>
    )
}
export default Header;