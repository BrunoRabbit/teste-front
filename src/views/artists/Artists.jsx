import React from 'react';
import { ArtistsContext } from '../../components/context/ArtistsProvider';
import './Artists.css';
import CardArtists from './cardArtists/CardArtists.jsx';

const Artists = () => {

    return (
        <div className='Artists'>
            <div className='Artists-title'>
                <i className='Artists-icon'></i>
                <div className='Artists-topics'>
                    <strong>Renowned Artists</strong>
                </div>
            </div>
            <br />
            <ArtistsContext.Consumer>
                {(value) => value.map(artists =>
                    <CardArtists
                        name={artists.name}
                        lastname={artists.lastname}
                    />)}
            </ArtistsContext.Consumer>


        </div>
    );
}

export default Artists;