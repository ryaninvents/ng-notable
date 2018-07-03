import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
const PouchDB = require('pouchdb').default;

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
}
