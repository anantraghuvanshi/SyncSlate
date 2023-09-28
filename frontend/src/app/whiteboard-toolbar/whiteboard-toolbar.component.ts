import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-whiteboard-toolbar',
  templateUrl: './whiteboard-toolbar.component.html',
  styleUrls: ['./whiteboard-toolbar.component.css']
})
export class WhiteboardToolbarComponent {
  selectedColor = '#000000';  // Default color is black.
  isEraserMode = false;
  eraserSize = 10;  // Default eraser size

  @Output() colorChange = new EventEmitter<string>();
  @Output() toolChange = new EventEmitter<string>();
  @Output() eraserSizeChange = new EventEmitter<number>();

  colorChanged() {
    this.colorChange.emit(this.selectedColor);
  }

  toggleEraserMode() {
    this.isEraserMode = !this.isEraserMode;
    this.toolChange.emit(this.isEraserMode ? 'eraser' : 'pen');
  }

  adjustEraserSize(event: any) {
    this.eraserSize = event.value;
    this.eraserSizeChange.emit(this.eraserSize);
  }
}
