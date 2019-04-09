import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ExampleButton } from '../src/ExampleButton/button';

const stories = storiesOf('Button', module);

stories.add(
  'with text',
  withInfo({
    inline: true,
    text: 'A simple button'
  })(() => (
    <ExampleButton
      text={text('text', 'Hello')}
    />
  )),
);

stories.add(
  'with emoji',
  withInfo({
    inline: true,
    text: 'A simple button with some flare'
  })(() => (
    <ExampleButton
      text={text('text', '👻 👽 🤖 💩!')}
    />
  )),
);
