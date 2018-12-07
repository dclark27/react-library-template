import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../ExampleButton/button';

const stories = storiesOf('Button', module);

stories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Button
      text={'hey!'}
    />
  )),
);

stories.add(
  'with emoji',
  withInfo({ inline: true })(() => (
    <Button
      text={'👻 👽 🤖 💩!'}
    />
  )),
);
