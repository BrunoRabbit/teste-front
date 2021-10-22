import './App.css';
import React from 'react';
import Menu from './components/layout/navbar/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/layout/content/Content';
import AlbumProvider from './components/context/AlbumProvider.js';
import ArtistsProvider from './components/context/ArtistsProvider.js';
import NewsProvider from './components/context/NewsProvider.js';


const App = () => {

  return (
    <div className='App'>
      <AlbumProvider>
        <ArtistsProvider>
          <NewsProvider>
            <Router>
              <Menu />
              <Content />
            </Router>
          </NewsProvider>
        </ArtistsProvider>
      </AlbumProvider>
    </div>


  );

}

export default App;
