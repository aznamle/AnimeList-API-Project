import React, { useState, useEffect } from 'react'
import List from './List'

function Container() {
    
    const [ anime, setAnime ] = useState([])

    useEffect(() => {
        animeList()
    }, [])
    
    const animeList = async () => {
        const response = await fetch(`https://api.jikan.moe/v3/user/aznamle/animelist/completed?order_by=score&sort=descending`)
        const data = await response.json()
        setAnime(data.anime)
    }

    return (
        <>
            <List anime={anime} />
        </>
    )
}

export default Container
