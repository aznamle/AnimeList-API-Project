import React from 'react'

import { withStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function NavBar( {classes} ) {
    return (
        <AppBar className={classes.NavColor} color="primary" position="sticky">
            <Toolbar>
                <Typography align="center" variant="h6" component="p">
                    Aznamle's Anime List
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