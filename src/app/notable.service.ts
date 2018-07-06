import { Injectable } from '@angular/core';
import { Observable, from, empty } from 'rxjs';
import PouchDB from 'pouchdb';

import {NoteMetadata} from './types';

@Injectable({
  providedIn: 'root'
})
export class NotableService {
  private db = null;
  
  constructor() {
    this.db = new PouchDB('notes');
  }

  fetchNote(id: String): Observable<NoteMetadata> {
    return from(this.db.get(id));
  }

  fetchNotes(): Observable<NoteMetadata> {
    return empty();
  }
}
