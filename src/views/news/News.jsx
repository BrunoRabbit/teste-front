import React from 'react';
import './News.css';
import CardNews from './cardNews/CardNews.jsx';
import { NewsContext } from '../../components/context/NewsProvider';

const News = () => {
    return (

        <div className='News'>

            <div className='News-title'>
                <i className='icon'></i>
                <div className='Topics-news'>
                    <strong>News</strong>
                </div>
            </div>
            <br />
            <div>
                <NewsContext.Consumer>
                    {(value) => value.map(news =>
                        <CardNews
                            title={news.title}
                            subtitle={news.subtitle}
                            content={news.content}
                            writer={news.writer}
                            area={news.area}
                            date={news.date}
                        />)}
                </NewsContext.Consumer>

            </div>
        </div>
    );
}

export default News;