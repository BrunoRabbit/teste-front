import React from 'react';
import Card from '../../components/layout/card/Card';
import Title from '../../components/layout/title/Title';
import Image from '../../images/imagem.png';
import ImageUser from '../../images/user.png';
import ImageNews from '../../images/news.png';

import { AlbumContext } from '../../components/context/AlbumProvider';
import { ArtistsContext } from '../../components/context/ArtistsProvider';
import { NewsContext } from '../../components/context/NewsProvider';

const Home = () => {

    return (
        <div>
            <div>
                <div>
                    <Title titulo={"Albums"} to={'/album'} />
                    <AlbumContext.Consumer>{
                        (value) => value.map(album =>
                            <Card
                                title={album.title}
                                image={Image}
                                release={'Release date'}
                                content={album.release_date}
                            />).slice(0, 5)}
                    </AlbumContext.Consumer>
                </div>

            </div>
            <div>
                <div>
                    <Title titulo={"News"} to={'/news'} />
                    <NewsContext.Consumer>
                        {(value) => value.map(news =>
                            <Card title={news.title}
                                image={ImageNews}
                                release={'Creation date'}
                                content={news.creation_date}
                            />).slice(0, 5)}
                    </NewsContext.Consumer>
                </div>
            </div>
            <div>
                <div>
                    <Title titulo={"Artists"} to={'/artists'} />
                    <ArtistsContext.Consumer>
                        {(value) => value.map(artists =>
                            <Card title={artists.name}
                                image={ImageUser}
                                release={'Creation date'}
                                content={artists.creation_date}
                            />).slice(0, 5)}
                    </ArtistsContext.Consumer>

                </div>
            </div>
        </div>
    );
}


export default Home;