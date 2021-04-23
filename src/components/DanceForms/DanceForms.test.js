import React from 'react';
import renderer from 'react-test-renderer';
import DanceForms from './DanceForms';

test('DanceForms with desired options test', () => {
  const component = renderer.create(
    <DanceForms/>
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
