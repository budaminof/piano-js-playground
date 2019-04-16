import React from 'react';
import { shallow } from 'enzyme';
import MusicInput from './musicInput.component';

describe('MUSIC INPUT', () => {

  it('onChange should accept only valid notes from the octave', () => {
    const wrapper = shallow(<MusicInput />);
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
    const wrapper = shallow(<MusicInput />);
    const instance = wrapper.instance();

    instance.handleChange({ target: { value: 'e' } });
    expect(instance.state.notes).toBe('E');

    instance.handleChange({ target: { value: 'ab' } });
    expect(instance.state.notes).toBe('AB');

    instance.handleChange({ target: { value: 'ab12' } });
    expect(instance.state.notes).toBe('AB');
  })

  it('should disable the PLAY button if there are no notes', () => {
    const wrapper = shallow(<MusicInput />);
    const instance = wrapper.instance();

    instance.handleChange({ target: { value: 'ABC' } });
    expect(wrapper.find('button').is('[disabled]')).toBe(false);
    instance.handleChange({ target: { value: '' } });
    expect(wrapper.find('button').is('[disabled]')).toBe(true);
  })
});