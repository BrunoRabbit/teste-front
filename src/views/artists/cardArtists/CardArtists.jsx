import React from 'react';
import './CardArtists.css';

const CardArtists = props => {
    return (
        <div className='CardArtists'>
            <div className='Artists-Card'>
                <div>
                    <img className='Artists-User-Icon' alt="" />
                </div>
                <h1>{props.name}</h1>
                <p className="teste">Last name: {props.lastname} </p>
            </div>

        </div>
    );
}

export default CardArtists;