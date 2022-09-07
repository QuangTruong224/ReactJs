import './App.css';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contract from './component/Contract';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to='home'>Home</Link>
          </li>
         
          <li><Link to='about'>About</Link>
            </li>
       
          <li><Link to='contract'>Contract</Link>
            </li>
        </ul>
      </div>
      <div>
        <Routes>
        <Route  path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route exact path="contract" element={<Contract/>} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
