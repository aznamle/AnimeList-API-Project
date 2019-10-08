import React from 'react'

import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function AniCard( {title, tag, img, url, classes} ) {

    return (
        <Card className={classes.item}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media}>
                    <img src={img}></img>
                </CardMedia>
            </CardActionArea>
            <CardContent>
                <Typography className={classes.text} variant="h6" component="p">
                    {title}
                </Typography>
                <Typography className={classes.text} variant="body2" color="textSecondary">
                    {tag}
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
})(AniCard) 