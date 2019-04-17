import React from 'react';
import { connect } from 'react-redux';
import { submitMusicToPlay } from '../redux/actions';

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
    event.preventDefault()
    this.setState({ showError: false })
    this.props.submitMusicToPlay(this.state.notes);
  }

  render() {
    return (
      <form className="music-input" onSubmit={this.handleSubmit}>
        <input type="text" size="40" value={this.state.notes} onChange={this.handleChange} />
        {this.state.showError ? <p>You can only use the notes displayed on the piano.</p> : <p></p>}
        <button type="submit" disabled={!this.state.notes.length}>play</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitMusicToPlay: data => dispatch(submitMusicToPlay(data)),
  }
}

export default connect(null, mapDispatchToProps)(MusicInput);
