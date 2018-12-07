import 'bootstrap/dist/css/bootstrap.css';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

const req = require.context('../src/stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withOptions({
    theme: {
      name: 'Foo',
      theme: themes.dark,
    },
  })
);

configure(loadStories, module);
