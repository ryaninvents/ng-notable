import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import { NotableService } from '../notable.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  private changesPending: boolean = false;
  private hasEverChanged: boolean = false;

  faCircle = faCircle;

  @Input() noteId: String;
  private newContent = new EventEmitter<String>();
  private contentUpdates = this.newContent.asObservable();

  constructor(
    private notesService: NotableService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      async (params) => {
        this.noteId = params.get('id');
        // I know, I ought to write this using Observable operators,
        // but it's late.
        const content = await this.notesService.fetchContent(this.noteId);
        this.newContent.emit(content);
      }
    );
  }

  setChangesPending(isPending) {
    if (isPending) {
      this.changesPending = isPending;
      this.hasEverChanged = true;
    }
  }

  async saveContent(content) {
    await this.notesService.saveContent(content, this.noteId);
    this.changesPending = false;
  }
}
