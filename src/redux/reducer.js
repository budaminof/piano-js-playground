export default (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_MUSIC_TO_PLAY':
      return {
        notesToPlay: action.payload
      }
    default:
      return state
  }
}