import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
    },
    card: {
        display: "flex",
        flexDirection: "column",    
    },
    media: {
      height: 240,
    },
  }))

function App() {

    const [anime, setAnime] = useState([])

    useEffect(() => {
        animeList()
    }, [])
    
    const animeList = () => {
        axios
            .get('https://api.jikan.moe/v3/user/aznamle/animelist/completed')
            .then(response => {
                setAnime(response.data.anime)
            })
    }

    const classes = useStyles()

    return (
        <div className="">
            <Grid container justify="center" flexDirection="row">
            {anime.map(ani => (
                <Card className={classes.card} key={ani.id}>
                    <CardActionArea href={ani.url} target="_blank">
                    <CardMedia className="">
                        <img src={ani.image_url} />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            {ani.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {ani.tags}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            </Grid>
        </div>
    )
}

export default App