import React from 'react';
import './musicInput.scss';

class MusicInput extends React.Component {

  render() {
    return (
      <div className="music-input">
        <input type="text" size="40" />
        <button>play music</button>
      </div>
    )
  }
}

export default MusicInput;