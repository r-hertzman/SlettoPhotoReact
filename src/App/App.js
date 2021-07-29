import React from 'react';
import './App.css';

import NavBar from '../Components/NavBar/NavBar';
import Home from '../Components/Home/Home';


class App extends React.Component{
  render () {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <div className="footer">
          <footer>
            <p className="copyright">Copyright &#169 Andrew Sletto | Designed with <i className="far fa-heart"></i> by <a href="http://www.rachelhertzman.com" target="_blank">Rachel Hertzman</a></p>
          </footer>
        </ div>
      </div>
    );
  }
}

export default App;
