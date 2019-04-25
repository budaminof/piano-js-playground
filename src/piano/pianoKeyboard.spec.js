import React from 'react';
import { shallow } from 'enzyme';
import { PianoKeyboard } from './pianoKeyboard.component';

describe('PIANO KEYBOARD', () => {
  const wrapper = shallow(<PianoKeyboard />);
  const instance = wrapper.instance()

  it('should add notes to queue on click event', () => {
    expect(instance.state.notesPlayed).toHaveLength(0);
    instance.addNoteToQueue('E');
    instance.addNoteToQueue('G');
    expect(instance.state.notesPlayed).toHaveLength(2);
  });
});