import React from 'react';
import renderer from 'react-test-renderer';
import DanceForm from './DanceForm';

const imageSrc=  'electronic-dance';
const name= 'Electronic Dance';
const bio= 'This style of Dance is also known as Electronic Dance Music (EDM). This style started in Northern Europe during the 2000s and has become very popular in the next decades. This Dance is typically performed to electro house music based on different dance styles like disco, hip hop and freehand glow sticking.'

test('DanceForm component test', () => {
  const component = renderer.create(
    <DanceForm bio={bio} imageSrc={imageSrc} name={name}/>
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
