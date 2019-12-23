import React from 'react'

import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function WatchingCard( {title, img, url, classes} ) {

    return (
        <Card className={classes.item}>
            <CardActionArea href={url} target="_blank">
                <CardMedia>
                    <img src={img} />
                </CardMedia>
            </CardActionArea>
            <CardContent>
                <Typography className={classes.text} variant="h6">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles({
    item: {
        minWidth: "300px",
        margin: "1em",
        textAlign: "center",
        boxSizing: "border-box"
    },
    media: {
        minHeight: "100px",
    },
    text: {
        width: "300px",
        textAlign: "center",
    }
})(WatchingCard) 