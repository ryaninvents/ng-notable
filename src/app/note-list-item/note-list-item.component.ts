import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styles: [`
  a[role=button] {
    color: var(--primary) !important;
    cursor: pointer;
  }`],
})
export class NoteListItemComponent implements OnInit {

  @Input() title: String;
  @Input() lastUpdated: Date;
  @Input() preview: String;

  @Output() onTitleClick = new EventEmitter();

  ngOnInit() {
  }

  handleTitleClick() {
    this.onTitleClick.emit();
  }

}
