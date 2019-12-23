import React from 'react'

import { withStyles } from '@material-ui/core'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import LazyLoad from 'react-lazyload'


function AniCard( {title, tag, img, score, url, classes} ) {

    return (
        <Card className={classes.card}>
            <div className={classes.item}>
                <CardActionArea href={url} target="_blank">
                    <LazyLoad height={200}>
                        <CardMedia className={classes.media}>
                            <img src={img} />
                            <GridListTileBar
                                title={title}
                                subtitle={<span>Score: {score}</span>}
                            />
                        </CardMedia>
                    </LazyLoad>
                </CardActionArea>
            </div>
            <div className={classes.detail}>
                <CardContent>
                    <Typography className={classes.text} variant="body1" color="textPrimary">
                        {tag}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}


export default withStyles({
    card: {
        display: 'flex',
        margin: '2em',
        minWidth: "250px"
    },
    item: {
        textAlign: "center",
        boxSizing: "border-box"
    },
    media: {
        height: "307px",
    },
    text: {
        width: "300px",
        textAlign: "center",
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    }
})(AniCard) 