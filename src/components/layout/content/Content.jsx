import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Album from '../../../views/album/Album';
import News from '../../../views/news/News';
import Artists from '../../../views/artists/Artists';
import Home from '../../../views/home/Home';

const Content = () => {
    
    return(
        <div className='ContainerContent'>
            <Switch>
                <Route path="/Album">
                    <Album />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/artists">
                    <Artists />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            
      </div>
    );
}
export default Content;
          
          