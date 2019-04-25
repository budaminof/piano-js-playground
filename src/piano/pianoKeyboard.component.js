import React from 'react';
import { connect } from 'react-redux';
import './pianoKeyboard.scss';

import { toggleUpdateNote } from '../redux/actions';
import MusicLog from './musicLog.component';

export class PianoKeyboard extends React.Component {
  state = {
    notesPlayed: [],
    counter: 0,
    previouseKey: null,
  }
  c = React.createRef();
  d = React.createRef();
  e = React.createRef();
  f = React.createRef();
  g = React.createRef();
  a = React.createRef();
  b = React.createRef();

  componentDidUpdate() {
    if (this.props.updateNote) {
      this.highlightKeys();
      this.props.toggleUpdateNote();
    }
  }

  addNoteToQueue(note) {
    if (note === '') { return }
    this.setState({ notesPlayed: [...this.state.notesPlayed, note] })
  }

  highlightKeys() {
    let currentNode = this[this.props.notesToPlay[0].toLowerCase()];
    currentNode.classList.add('active');
    setTimeout(() => {
      currentNode.classList.remove('active');
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="keyboard-wrapper">
          <ul className="octave" onClick={e => this.addNoteToQueue(e.target.innerText)}>
            <li className="white" ref={ref => this.c = ref}><h2>C</h2></li>
            <li className="black"></li>
            <li className="white" ref={ref => this.d = ref}><h2>D</h2></li>
            <li className="black"></li>
            <li className="white" ref={ref => this.e = ref}><h2>E</h2></li>
            <li className="white" ref={ref => this.f = ref}><h2>F</h2></li>
            <li className="black"></li>
            <li className="white" ref={ref => this.g = ref}><h2>G</h2></li>
            <li className="black"></li>
            <li className="white" ref={ref => this.a = ref}><h2>A</h2></li>
            <li className="black"></li>
            <li className="white" ref={ref => this.b = ref}><h2>B</h2></li>
          </ul>
        </div>
        <MusicLog notes={this.state.notesPlayed} />
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    notesToPlay: state.musicReducer.notesToPlay,
    updateNote: state.musicReducer.updateNote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleUpdateNote: () => dispatch(toggleUpdateNote()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PianoKeyboard);