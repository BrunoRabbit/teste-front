
import './App.css';
import React from 'react';
import Menu from './components/layout/navbar/Menu';
import { BrowserRouter as Router} from 'react-router-dom';
import Content from './components/layout/content/Content';
// import api from './api';
const App = () => {
  
    return(
      <div>
        <Router>
          <Menu />  
          <Content />
        </Router>
      </div>

    );
  
}

export default App;
