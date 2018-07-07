import {EditorView} from "prosemirror-view"
import {EditorState, Plugin} from "prosemirror-state"
import {schema, defaultMarkdownParser,
        defaultMarkdownSerializer} from "prosemirror-markdown"
import {exampleSetup} from "prosemirror-example-setup"
import { EventEmitter } from "@angular/core";

export class ProseMirrorView {
  private view: EditorView =  null;
  private changes: EventEmitter<any> = new EventEmitter();

  constructor(target, content) {
    const plugin = new Plugin({
      state: {
        init() {
          return {};
        },
        apply: (transaction, _, oldState, newState) => {
          if (oldState.doc !== newState.doc) {
            this.changes.emit();
          }
          return _;
        },
      },
    });
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(content),
        plugins: exampleSetup({schema}).concat(plugin)
      })
    })
  }

  getChanges() {
    return this.changes.asObservable();
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc)
  }
  focus() { this.view.focus() }
  destroy() { this.view.destroy() }
}