import React from 'react'

import { withStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function NavBar( {classes} ) {
    return (
        <AppBar className={classes.NavColor} color="primary" position="static">
            <Toolbar variant="regular">
                <Typography align="center" variant="h5" component="p">
                    Anime List
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles({
    NavColor: {
        backgroundColor: '#navyblue',
    }
})(NavBar)