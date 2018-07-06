import { Injectable } from '@angular/core';
import { Observable, from, empty, of as $of, fromEvent, merge } from 'rxjs';
import {flatMap} from 'rxjs/operators';
import PouchDB from 'pouchdb';
import eyed from 'eyed';

import {NoteMetadata} from './types';

function deserialize({_id, lastUpdated, ...fields}): NoteMetadata {
  return {
    id: _id,
    lastUpdated: new Date(lastUpdated),
    ...fields,
  } as any;
}

function serialize({id, lastUpdated, ...fields}: NoteMetadata) {
  return {
    _id: id,
    lastUpdated: lastUpdated.toISOString(),
    ...fields
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotableService {
  private db = null;
  
  constructor() {
    this.db = new PouchDB('notes');
  }

  async fetchNote(id: String): Promise<NoteMetadata> {
    const doc = await this.db.get(id);
    return deserialize(doc);
  }

  async fetchNotes(): Promise<Array<NoteMetadata>> {
    const {rows} = await this.db.allDocs({include_docs: true});
    return rows.map(({doc}) => deserialize(doc));
  }

  observeNotes(): Observable<Array<NoteMetadata>> {
    return merge(
      from(this.fetchNotes()),
      fromEvent(this.db.changes(), 'change')
        .pipe(flatMap(() => from(this.fetchNotes())))
    );
  }

  async createNote(): Promise<NoteMetadata> {
    const id = eyed.uuid();
    const meta = {
      id,
      title: '',
      lastUpdated: new Date(),
      preview: '',
    }
    await this.db.put(serialize(meta));
    return meta;
  }
}
