import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
export default function Menu(){
    return (
       <nav>
                <div>
                    <div>
                        <ul>
                            <li><Link to="/"><strong><i className='fa fa-home'></i> FluxMusic</strong></Link></li>
                            <li><strong><Link to="/news"> <i className='fa fa-newspaper-o'></i> News</Link></strong></li>
                            <li><strong><Link to="/artists"> <i className='fa fa-user-circle'></i> Artists</Link></strong></li>
                            <li><strong><Link to="/album"> <i className='fa fa-headphones'></i> Albums</Link></strong></li>
                        </ul>
                    </div>     
                </div>
       </nav>
    );
}