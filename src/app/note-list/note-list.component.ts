import { Component, OnInit } from '@angular/core';
import {NotableService} from '../notable.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  title = null;
  notes = [];

  constructor(private notesService: NotableService) {}

  ngOnInit() {
    this.notesService.fetchNote("1")
      .subscribe((note) => {
        this.title = note.title;
        this.notes = [note];
      });
  }

}
