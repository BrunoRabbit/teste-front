import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
export default function Menu(){
    return (
       <nav>
                <div>
                    <div>
                        <ul>
                            <li><Link to="/"><strong>FluxMusic</strong></Link></li>
                            <li><strong><Link to="/news">Noticias</Link></strong></li>
                            <li><strong><Link to="/artists">Artistas</Link></strong></li>
                            <li><strong><Link to="/album">Álbuns</Link></strong></li>
                        </ul>
                    </div>     
                </div>
       </nav>
    );
}