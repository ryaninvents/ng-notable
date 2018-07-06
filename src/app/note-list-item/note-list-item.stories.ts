import { storiesOf } from '@storybook/angular';
import { Injectable } from '@angular/core';
import { Observable, of as $of, from, empty } from 'rxjs';
import {action} from '@storybook/addon-actions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {NoteListItemComponent} from './note-list-item.component';
import {NoteListComponent} from '../note-list/note-list.component';
import { NoteMetadata } from '../types';
import { NotableService } from '../notable.service';

const MOCK_DATA = require('../note-list/mock-data.json');

const MockNotableService = (() => {
  @Injectable({providedIn: 'root'})
  class NotableService {
    fetchNote(id: String): Observable<NoteMetadata> {
      return $of(MOCK_DATA.notes[0]);
    }
  }

  return NotableService;
})();

const moduleWithMockData = (mockData) => ({
  declarations: [NoteListItemComponent],
  imports: [FontAwesomeModule],
  providers: [
    {
      provide: NotableService,
      useClass: (() => {
        @Injectable({providedIn: 'root'})
        class MockNotableService {
          fetchNote(id: String): Observable<NoteMetadata> {
            const matchingNote = mockData.notes.find((note) => note.id === id);
            if (!matchingNote) return empty();
            return $of(matchingNote);
          }

          fetchNotes(): Observable<NoteMetadata> {
            return from(mockData.notes);
          }
        }
      
        return MockNotableService;
      })(),
    }
  ]
})

storiesOf('note-list/item', module)
  .add('default', () => ({
    component: NoteListItemComponent,
    props: {
      title: "My first note",
      lastUpdated: new Date(Date.now() - 3 * 864e5),
      preview: 'Four score and seven years ago...',
      onTitleClick: action('onTitleClick'),
    }
  }))


storiesOf('note-list', module)
  .add('with mock data', () => ({
    component: NoteListComponent,
    moduleMetadata: moduleWithMockData(MOCK_DATA),
  }))
  .add('with no notes', () => ({
    component: NoteListComponent,
    moduleMetadata: moduleWithMockData({
      notes: [],
    })
  }))