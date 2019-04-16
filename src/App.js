import React, { Component } from 'react';
import './App.scss';
import PianoKeyboard from './piano/pianoKeyboard.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoKeyboard />
      </div>
    );
  }
}

export default App;
