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
      
      // TODO: plug this memory leak
      fromEvent(this.db.changes({live: true}), 'change')
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

  async saveContent(content: String, id: String): Promise<void> {
    const [firstLine] = content.split('\n');
    let title = '';
    if (firstLine.charAt(0) === '#') {
      // Document begins with a header; use this as title.
      title = firstLine.replace(/^#+\s*/, '');
    }
    const oldDoc = await this.db.get(id);
    const newDoc = {...oldDoc, title, content};
    if (content.length < 30) {
      newDoc.preview = content;
    } else {
      newDoc.preview = content.slice(0, 27).trim() + '...';
    }
    await this.db.put(newDoc);
  }

  async fetchContent(id: String): Promise<String> {
    const doc = await this.db.get(id);
    return doc.content || '';
  }
}
