import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteViewComponent } from './note-view.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteViewComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
