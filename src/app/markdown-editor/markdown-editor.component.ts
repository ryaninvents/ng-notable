import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProseMirrorView } from './ProsemirrorView';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css', '../../../node_modules/prosemirror-view/style/prosemirror.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownEditorComponent {
  @ViewChild('ref', {read: ElementRef}) ref: ElementRef;
  private view: ProseMirrorView = null;

  constructor() { }

  ngAfterViewInit() {
    this.view = new ProseMirrorView(this.ref.nativeElement, 'Hello **world**');
    this.view.focus();
  }

  ngOnDestroy() {
    this.view.destroy();
  }

}
