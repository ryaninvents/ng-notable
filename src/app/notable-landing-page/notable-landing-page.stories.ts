import { storiesOf } from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import { NotableLandingPageComponent } from './notable-landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

storiesOf('notable-landing-page', module)
  .add('default', () => ({
    component: NotableLandingPageComponent,
    props: {},
    moduleMetadata: {
      imports: [FontAwesomeModule],
    }
  }))