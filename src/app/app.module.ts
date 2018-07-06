import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteListComponent } from './note-list/note-list.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

export const declarations = [
  AppComponent,
  NoteListItemComponent,
  NavbarComponent,
  NoteListComponent,
  MarkdownEditorComponent,
];

@NgModule({
  declarations,
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
