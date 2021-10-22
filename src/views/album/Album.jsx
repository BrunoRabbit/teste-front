import React from 'react';
import './Album.css';
import { AlbumContext } from '../../components/context/AlbumProvider';
import Card from '../../components/layout/card/Card';
import Image from '../../images/imagem.png';

const Album = () => {
    return (
        <div className='Album'>
            <div className='Album-title'>
                <i className='Album-icon'></i>
                <div className='Album-topics'>
                    <strong>Albums</strong>
                </div>
            </div>
            <br />
            <div>
                <AlbumContext.Consumer>{
                    (value) => value.map(album =>
                        <Card
                            title={album.title}
                            image={Image}
                            release={'Release date'}
                            content={album.release_date}
                        />)}
                </AlbumContext.Consumer>
            </div>
        </div>

    );
}

export default Album;