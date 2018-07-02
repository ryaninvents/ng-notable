import { storiesOf } from '@storybook/angular';

import {NoteListItemComponent} from './note-list-item.component';

storiesOf('note-list/item', module)
  .add('default', () => ({
    component: NoteListItemComponent,
    props: {
      title: "My first note",
      lastUpdated: new Date(Date.now() - 3 * 864e5),
      preview: 'Four score and seven years ago...',
    },
    moduleMetadata: {
    }
  }))