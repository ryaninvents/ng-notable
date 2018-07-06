import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteListComponent } from './note-list/note-list.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { NotableLandingPageComponent } from './notable-landing-page/notable-landing-page.component';
import { NewNoteComponent } from './new-note/new-note.component';

const appRoutes: Routes = [
  {path: '', component: NotableLandingPageComponent},
  {path: 'note/:id', component: MarkdownEditorComponent},
];

export const declarations = [
  AppComponent,
  NoteListItemComponent,
  NavbarComponent,
  NoteListComponent,
  MarkdownEditorComponent,
  NotableLandingPageComponent,
  NewNoteComponent,
];

@NgModule({
  declarations,
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
