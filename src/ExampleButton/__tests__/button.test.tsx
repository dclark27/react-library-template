import React from 'react';
import { ExampleButton } from '../button';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <ExampleButton text='Cute button!' />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
