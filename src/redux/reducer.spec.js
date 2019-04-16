import reducer from './reducer';

describe('REDUCER', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle SUBMIT_MUSIC_TO_PLAY', () => {
    const submitMusicAction = {
      type: 'SUBMIT_MUSIC_TO_PLAY',
      payload: 'CBD',
    };
    expect(reducer({}, submitMusicAction)).toEqual({ notesToPlay: "CBD", });
  });
});