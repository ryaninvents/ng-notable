import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import * as PouchDB from 'pouchdb';

import {NoteMetadata} from './types';

@Injectable({
  providedIn: 'root'
})
export class NotableService {
  private db = null;
  
  constructor(Pouch = PouchDB) {
    this.db = new Pouch('notes');
  }

  fetchNote(id: String): Observable<NoteMetadata> {
    return from(this.db.get(id));
  }
}
