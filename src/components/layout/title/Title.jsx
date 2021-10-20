import React from "react";
import './Title.css';
import { Link } from 'react-router-dom';


const Title = (props) => {
    const text = props.titulo;

    return (
        <div className="Name">
            <a href="/#">{text}</a>
            <Link className="VerMais" to={props.to}>Ver Mais</Link>
        </div>
        
    );

}
export default Title;
