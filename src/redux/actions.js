export function submitMusicToPlay(payload) {
  return {
    type: 'SUBMIT_MUSIC_TO_PLAY',
    payload,
  }
}

export function startPlaying() {
  return {
    type: 'START_PLAYING_NOTES'
  }
}

export function finishPlaying() {
  return {
    type: 'FINISH_PLAYING_NOTES'
  }
}

export function toggleUpdateNote() {
  return {
    type: 'TOGGLE_UPDATE_NOTES'
  }
}