import React, { Component } from 'react';
import './App.css';
import Star from './Assets/star.png'
class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <img className='Star3' alt='' src={Star}/>
        <img className='Star4' alt='' src={Star}/>
        <img className='Star' alt='' src={Star}/>
        <img className='Star2' alt='' src={Star}/>
        </div>
        <div className='up'>
        <div className='Vote'>Vote</div>
        <div className='Judge'>Judge</div>
        <div className='Woods'>Woods</div>
        </div>
      </div>
    );
  }
}

export default App;
