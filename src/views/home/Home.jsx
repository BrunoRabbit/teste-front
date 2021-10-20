import React from 'react';
import Card from '../../components/layout/card/Card';
import Title from '../../components/layout/title/Title';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Home = props => {

    const [lista, setLista] = useState([]);


  useEffect(()=>{ 
    // TODO - puxar a API
    axios.get('http://api.music-story.com/en/genre/1/albums.json')
      .then(data => console.log(data?.data));

    setLista([
          {id:1, title: 'yanlindo'},
          {id:2, title: 'rikaholindo'},
          {id:3, title: 'matheus'},
          {id:4, title: 'japinha'},
          {id:5, title: 'jao'},

      ])
  },[]);
  
    return(
        <div>
            <div>
                <Title titulo={"Álbuns"} to={'/album'} />
                {lista.map(response=>(
                    <Card title={response.title} /> 
                ))}
            </div>
            <div>
                <Title titulo={"Notícias"} to={'/news'} />
                {lista.map(response=>(
                    <Card title={response.title} /> 
                ))}
            </div>
            <div>
                <Title titulo={"Artistas"} to={'/artists'} />
                {lista.map(response=>(
                    <Card title={response.title} /> 
                ))}
            </div>
    </div>
    );
}

export default Home;