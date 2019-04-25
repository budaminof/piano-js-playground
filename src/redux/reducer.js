export default (state = {
  playMusic: false,
  updateNote: false,
}, action) => {
  switch (action.type) {
    case 'SUBMIT_MUSIC_TO_PLAY':
      return {
        ...state,
        notesToPlay: action.payload,
        updateNote: true
      }
    case 'START_PLAYING_NOTES':
      return {
        ...state,
        playMusic: true,
      }
    case 'FINISH_PLAYING_NOTES':
      return {
        ...state,
        playMusic: false,
      }
    case 'TOGGLE_UPDATE_NOTES':
      return {
        ...state,
        updateNote: false,
      }
    default:
      return state
  }
}