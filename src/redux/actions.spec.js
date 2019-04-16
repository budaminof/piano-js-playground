import { submitMusicToPlay } from './actions';

describe('ACTIONS', () => {
  it('submitMusicToPlay should return an object with a string as paylaod', () => {
    const action = submitMusicToPlay('ACB')
    expect(action.payload).toEqual('ACB')
  })
})