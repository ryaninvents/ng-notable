import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';

@Component({
  selector: '[note-list-item]',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css'],
})
export class NoteListItemComponent implements OnInit {
  @HostBinding('class') className: String = 'list-group-item list-group-item-action';

  @Input() title: String;
  @Input() lastUpdated: Date;
  @Input() preview: String;
  @Input() id: String;

  @Output() onTitleClick = new EventEmitter();

  ngOnInit() {
  }

  handleTitleClick() {
    this.onTitleClick.emit();
  }

}
