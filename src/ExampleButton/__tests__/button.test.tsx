import React from 'react';
import { shallow } from 'enzyme';
import { ExampleButton } from '../button';

it('renders without crashing', () => {
  shallow(<ExampleButton text='hey' />);
});
