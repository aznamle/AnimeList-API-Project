import React, { Fragment } from 'react'
import AniCard from './AniCard'

import { Grid, Typography, GridList } from '@material-ui/core'

function List( {anime} ) {
    
    return (
        <Fragment>
            <GridList >

            </GridList>
            <Grid container spacing={16} justify="center">
                {anime.map(ani => (
                    <AniCard title={ani.title} tag={ani.tags} img={ani.image_url} score={ani.score} url={ani.url}/>
                ))}
            </Grid>
        </Fragment>
    )
}

export default List