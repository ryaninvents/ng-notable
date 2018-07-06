import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListComponent } from './note-list.component';
import { NoteListItemComponent } from '../note-list-item/note-list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListComponent, NoteListItemComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
