import React from 'react';
import renderer from 'react-test-renderer';
import Menubar from '../MenuBar/MenuBar';

test('Menu bar with desired options test', () => {
  const component = renderer.create(
    <Menubar/>
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
