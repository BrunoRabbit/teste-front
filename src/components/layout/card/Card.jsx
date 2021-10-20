import React from 'react';
import './Card.css'; 

const Card = (props) => {
    return (
        <div className='Card'>
            <div className='Container'>

            <div className='Content'>Conteudo</div>
                <div className='Title'>{props.title}</div>
            
            </div>
        </div>
    );
}
export default Card;