import React, { useState, useEffect } from 'react'
import List from './List'
import NavBar from './NavBar'
import axios from 'axios'

function Container() {
    
    const [ anime, setAnime ] = useState([])
    const [ watching, setWatching ] = useState([])

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

    const animeWatching = () => {
        axios
            .get('https://api.jikan.moe/v3/user/aznamle/animelist/watching')
            .then(response => {
                setWatching(response.data.anime)
            })
    }

    return (
        <>
            <NavBar />
            <List anime={anime} watching={watching} />
        </>
    )
}

export default Container
