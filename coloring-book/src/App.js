import React, { Component } from 'react';
import './App.css';
import Star from './Assets/star.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Vote'>Vote</div>
        <div className='Judge'>Judge</div>
        <div className='Woods'></div>
      </div>
    );
  }
}

export default App;
