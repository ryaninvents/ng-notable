import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import {NotableService} from '../notable.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  title = null;
  notes = [];
  
  faFile = faFile;
  faAsterisk = faAsterisk;

  constructor(private notesService: NotableService) {}

  ngOnInit() {
    this.notesService.observeNotes()
      .subscribe((notes) => {
        this.notes = notes;
      });
  }

}
