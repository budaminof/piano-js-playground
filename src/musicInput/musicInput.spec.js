import React from 'react';
import { mount } from 'enzyme';
import { MusicInput } from './musicInput.component';

describe('MUSIC INPUT', () => {
  let wrapper;
  const mockSubmitMusic = jest.fn();
  const mockStartPlayingNotes = jest.fn();
  const mockFinishPlayingNotes = jest.fn();
  beforeEach(() => {
    wrapper = mount(<MusicInput
      submitMusicToPlay={mockSubmitMusic}
      startPlayingNotes={mockStartPlayingNotes}
      finishPlayingNotes={mockFinishPlayingNotes}
      playMusic={false}
    />);
  })

  it('onChange should accept only valid notes from the octave', () => {
    const instance = wrapper.instance();

    instance.handleChange({ target: { value: 'A' } });
    expect(instance.state.showError).toBeFalsy();
    expect(instance.state.notes).toBe('A');

    instance.handleChange({ target: { value: 'Ab' } });
    expect(instance.state.showError).toBeFalsy();
    expect(instance.state.notes).toBe('AB');

    instance.handleChange({ target: { value: 'Ab7' } });
    expect(instance.state.showError).toBeTruthy();
    expect(instance.state.notes).toBe('AB');
  })

  it('onChange should transform all notes to uppercase', () => {
    const instance = wrapper.instance();

    instance.handleChange({ target: { value: 'e' } });
    expect(instance.state.notes).toBe('E');

    instance.handleChange({ target: { value: 'ab' } });
    expect(instance.state.notes).toBe('AB');

    instance.handleChange({ target: { value: 'ab12' } });
    expect(instance.state.notes).toBe('AB');
  })

  it('should disable the PLAY button if there are no notes', () => {
    const instance = wrapper.instance();

    instance.handleChange({ target: { value: 'ABC' } });
    expect(!instance.state.notes.length).toBe(false);
    expect(wrapper.find('button').prop('disabled')).toBe(false);

    wrapper.setState({ notes: '' });
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  })

  it('should disable the PLAY button while notes are playing', () => {
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    // console.log(wrapper.props().playMusic);

    // expect(wrapper.props().playMusic).to.equal(true);
  })
});