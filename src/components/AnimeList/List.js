import React, { Fragment } from 'react'
import AniCard from './AniCard'

import { Grid } from '@material-ui/core'

function List( {anime} ) {
    
    return (
        <div>
            <Grid container spacing={16} justify="center">
                {anime.map(ani => (
                    <AniCard title={ani.title} tag={ani.tags} img={ani.image_url} score={ani.score} url={ani.url} episodes={ani.total_episodes} />
                ))}
            </Grid>
        </div>
    )
}

export default List