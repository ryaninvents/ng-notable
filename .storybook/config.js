import {isDevMode} from '@angular/core';

// Call `isDevMode` before importing Storybook config, to force dev mode.
isDevMode();
import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
