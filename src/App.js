import React, { Component } from 'react';
import './App.scss';
import PianoKeyboard from './piano/pianoKeyboard.component';
import MusicInput from './musicInput/musicInput.component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoKeyboard />
        <MusicInput />
      </div>
    );
  }
}

export default App;
