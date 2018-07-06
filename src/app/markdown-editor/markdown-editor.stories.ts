import { storiesOf } from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import { MarkdownEditorComponent } from './markdown-editor.component';

storiesOf('markdown-editor', module)
  .add('empty', () => ({
    component: MarkdownEditorComponent,
    props: {},
    moduleMetadata: {
    }
  }))