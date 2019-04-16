import React from 'react';
import { connect } from 'react-redux';
import './pianoKeyboard.scss';

import MusicLog from './musicLog.component';

export class PianoKeyboard extends React.Component {
  state = {
    notesPlayed: [],
  }

  addNotesToQueue(note) {
    if (note === '') { return }
    this.setState({ notesPlayed: [...this.state.notesPlayed, note] })
  }

  render() {
    return (
      <div>
        <ul className="octave" onClick={e => this.addNotesToQueue(e.target.innerText)}>
          <li className="white c"><h2>C</h2></li>
          <li className="black"></li>
          <li className="white d"><h2>D</h2></li>
          <li className="black"></li>
          <li className="white e"><h2>E</h2></li>
          <li className="white f"><h2>F</h2></li>
          <li className="black"></li>
          <li className="white g"><h2>G</h2></li>
          <li className="black"></li>
          <li className="white a"><h2>A</h2></li>
          <li className="black"></li>
          <li className="white b"><h2>B</h2></li>
        </ul>

        <MusicLog notes={this.state.notesPlayed} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notesToPlay: state.musicReducer.notesToPlay
  }
}

export default connect(mapStateToProps)(PianoKeyboard);