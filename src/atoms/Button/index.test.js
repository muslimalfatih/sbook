import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Button } from './index'

describe('<Button />', () => {
  it('Matches the snapshot', () => {
    expect(renderer.create('<Button/>').toJSON()).toMatchSnapshot();
  })
})
