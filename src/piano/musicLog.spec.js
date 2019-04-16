import React from 'react';
import { shallow } from 'enzyme';
import MusicLog from './musicLog.component';

describe('MUSIC LOG', () => {
  const wrapper = shallow(<MusicLog notes={['E', 'A']} />);
  it('should display all notes passed in as props', () => {
    expect(wrapper.find('.music-log').children()).toHaveLength(2);
  });
});