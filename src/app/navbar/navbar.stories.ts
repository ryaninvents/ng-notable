import { storiesOf } from '@storybook/angular';
import {action} from '@storybook/addon-actions';

import {NavbarComponent} from './navbar.component';

storiesOf('navbar', module)
  .add('default', () => ({
    component: NavbarComponent,
    props: {
      title: "My first note",
      lastUpdated: new Date(Date.now() - 3 * 864e5),
      preview: 'Four score and seven years ago...',
      onTitleClick: action('onTitleClick'),
    },
    moduleMetadata: {
    }
  }))