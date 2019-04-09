import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import "./storystyles.css"
import "../node_modules/tachyons/css/tachyons.css"

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo());
addDecorator(withKnobs);


configure(loadStories, module);
