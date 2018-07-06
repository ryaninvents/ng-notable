import { Component, OnInit, Input, EventEmitter, Output, HostBinding } from '@angular/core';

@Component({
  selector: '[note-list-item]',
  templateUrl: './note-list-item.component.html',
  styles: [`
  a[role=button] {
    color: var(--primary) !important;
    cursor: pointer;
  }`],
})
export class NoteListItemComponent implements OnInit {
  @HostBinding('class') className: String = 'list-group-item list-group-item-action';

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
