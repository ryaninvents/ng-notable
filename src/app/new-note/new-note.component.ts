import { Component, OnInit } from '@angular/core';
import { NotableService } from '../notable.service';

@Component({
  selector: '[create-new-note]',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css'],
  host: {
    '(click)': 'handleClick($event)',
  },
})
export class NewNoteComponent {

  constructor(private notesService: NotableService) { }

  handleClick(event) {
    this.notesService.createNote();
  }

}
