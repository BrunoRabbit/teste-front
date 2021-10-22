import React from 'react';
import './Card.css'; 

const Card = (props) => {

    return (
            <div className='Card'>
                <div className='Container'>
                    <div className='ReleaseDate'>
                        <img alt="" src={props.image}/>   
                            <span>
                                {props.title}
                            </span> 
                    </div>

                    <div className='Title'>
                        <span>
                            {props.release}: {props.content} 
                        </span>
                    </div>
                </div>
                
            </div>
    );
}
export default Card;