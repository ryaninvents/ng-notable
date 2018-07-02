import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
})
export class NoteListItemComponent implements OnInit {

  @Input() title: String;
  @Input() lastUpdated: Date;
  @Input() preview: String;

  ngOnInit() {
  }

}
