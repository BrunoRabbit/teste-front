import React, { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

export const AlbumContext = createContext([]);

export default function AlbumProvider({ children }) {
    const [albuns, setAlbuns] = useState([{}]);

    useEffect(() => {

        axios.get('http://api.music-story.com/en/genre/1/albums.json')
            .then(e => {
                setAlbuns(e.data.data);
            });
    }, []);


    return <AlbumContext.Provider
        value={albuns}>
        {children}
    </AlbumContext.Provider>;
}
export function useAlbuns() {
    const context = useContext(AlbumContext);
    const { albuns, setAlbuns } = context;

    return { albuns, setAlbuns };
}


