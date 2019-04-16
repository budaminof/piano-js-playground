import React from 'react';
import { shallow } from 'enzyme';
import MusicInput from './musicInput.component';

describe('MUSIC INPUT', () => {
  const wrapper = shallow(<MusicInput />);
  it('should exists', () => {
    console.log(wrapper.children().length);

  })
  it('should save the user input on click', () => {

  });
});