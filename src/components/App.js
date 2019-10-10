import React, { Fragment } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import Container from './AnimeList/Container'
import SearchAnime from './SearchAnime/SearchAnime'

function App() {

    return (
        <Fragment>
            <Container />
        </Fragment>
    )
}

export default App