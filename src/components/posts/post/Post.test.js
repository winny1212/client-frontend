import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('Individual Post <Post />', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Post />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
