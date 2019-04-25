import React from 'react';
import { connect } from 'react-redux';
import { startPlaying, finishPlaying, submitMusicToPlay } from '../redux/actions';

import './musicInput.scss';
export class MusicInput extends React.Component {
  state = {
    notes: 'AEC',
    allowedNoted: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    showError: false,
  }

  handleChange = (event) => {
    const charArray = event.target.value.toUpperCase().split('')
    const validChars = charArray.every((char) => this.state.allowedNoted.includes(char) ? true : false)

    if (!validChars) {
      this.setState({ showError: true })
    } else {
      this.setState({ notes: charArray.join(''), showError: false })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showError: false });
    let notesArr = this.state.notes.split('').length;
    let i = 0;
    this.props.startPlayingNotes();
    let playNotesInterval = setInterval(() => {
      if (i === notesArr) {
        this.props.finishPlayingNotes();
        return clearInterval(playNotesInterval)
      };
      this.props.submitMusicToPlay(this.state.notes[i]);
      i++;
    }, 1100);
  }

  render() {
    return (
      <form className="music-input" onSubmit={this.handleSubmit}>
        <input type="text" size="40" value={this.state.notes} onChange={this.handleChange} />
        {this.state.showError ? <p>You can only use the notes displayed on the piano.</p> : <p></p>}
        <button type="submit" disabled={!this.state.notes.length || this.props.playMusic}>play</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    playMusic: state.musicReducer.playMusic,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitMusicToPlay: notes => dispatch(submitMusicToPlay(notes)),
    startPlayingNotes: () => dispatch(startPlaying()),
    finishPlayingNotes: () => dispatch(finishPlaying()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicInput);
