import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { ProseMirrorView } from './ProsemirrorView';
import { debounceTime, scan, mapTo, takeUntil, take } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css', '../../../node_modules/prosemirror-view/style/prosemirror.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent {
  @ViewChild('ref', {read: ElementRef}) ref: ElementRef;
  private view: ProseMirrorView = null;

  @Input() contentUpdates: EventEmitter<string>;
  @Output() changes = new EventEmitter();
  @Output() changesPending = new EventEmitter();

  private contents = '';
  private flush = new EventEmitter();

  constructor() { }

  ngAfterViewInit() {
    this.initProseMirror();
  }

  initProseMirror() {
    if (this.view) {
      this.view.destroy();
    }
    this.flush.emit();

    this.view = new ProseMirrorView(this.ref.nativeElement, this.contents);
    this.view.focus();

    if (this.contentUpdates) {
      this.contentUpdates.pipe(
        takeUntil(this.flush.pipe(take(1)))
      ).subscribe(
        (newContent) => {
          this.contents = newContent;
          this.initProseMirror();
        }
      )
    }

    const changes = this.view.getChanges().pipe(
      takeUntil(this.flush.pipe(take(1)))
    );
    const debouncedChanges = changes.pipe(
      debounceTime(3000)
    );
    debouncedChanges.subscribe(this.handleChange);
    merge(
      changes.pipe(mapTo(true)),
      debouncedChanges.pipe(mapTo(false))
    ).pipe(
      scan((state, next) => next, false)
    ).subscribe((changesPending) => this.changesPending.emit(changesPending))
  }

  handleChange = (change) => {
    this.changes.emit(this.view.content);
  }
  
  ngOnDestroy() {
    this.view.destroy();
    this.flush.complete();
  }

}
