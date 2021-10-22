import React, { useEffect, createContext, useContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext([]);

export default function NewsProvider({ children }) {
    const [news, setNews] = useState([{}]);

    useEffect(() => {

        axios.get('http://api.music-story.com/en/genre/21/news.json')
            .then(e => {
                setNews(e.data.data)
            });
    }, []);

    return <NewsContext.Provider
        value={news}>
        {children}
    </NewsContext.Provider>;
}
export function useNews() {
    const context = useContext(NewsContext);
    const { news, setNews } = context;

    return { news, setNews };
}