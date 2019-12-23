import React from 'react'

import { withStyles } from '@material-ui/core'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import LazyLoad from 'react-lazyload'
import Skeleton from '@material-ui/lab/Skeleton';



function AniCard( {title, tag, img, score, url, episodes, classes} ) {

    return (
        <Card className={classes.card}>
            <div className={classes.item}>
                <CardActionArea href={url} target="_blank">
                    <LazyLoad height={200}>
                        <CardMedia className={classes.media}>
                            <img src={img} />
                            <GridListTileBar
                                title={title}
                                variant='1'
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
        minWidth: '50px',
        justifyContent: 'space-around',
    },
    item: {
        alignContent: 'center',
        boxSizing: "border-box"
    },
    media: {
        height: "307px",
    },
    text: {
        width: "200px",
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    }
})(AniCard) 