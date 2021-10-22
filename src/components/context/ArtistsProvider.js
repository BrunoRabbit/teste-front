import React, { useEffect, createContext, useContext, useState } from "react";
import axios from 'axios';

export const ArtistsContext = createContext([]);

export default function ArtistsProvider({ children }) {
    const [artists, setArtists] = useState([{}]);

    useEffect(() => {

        axios.get('http://api.music-story.com/en/genre/1/artists.json')
            .then(e => {
                setArtists(e.data.data);
            });
    }, []);


    return <ArtistsContext.Provider
        value={artists}>
        {children}
    </ArtistsContext.Provider>;
}
export function useArtists() {
    const context = useContext(ArtistsContext);
    const { artists, setArtists } = context;

    return { artists, setArtists };
}


