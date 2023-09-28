import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements AfterViewInit {
  @ViewChild('whiteboardCanvas', { static: false }) canvasRef!: ElementRef;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  isDrawing = false;

  currentColor = '#000000';  // default color
  currentTool = 'pen';  // default tool
  currentEraserSize = 10;  // default eraser size

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.ctx.lineWidth = 2;  // default line width
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineCap = 'round';
  }

  changeColor(newColor: string) {
    this.currentColor = newColor;
    if (this.currentTool === 'pen') {
      this.ctx.strokeStyle = this.currentColor;
    }
  }

  changeTool(newTool: string) {
    this.currentTool = newTool;
    if (newTool === 'pen') {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.strokeStyle = this.currentColor;
    } else {
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.strokeStyle = 'rgba(0,0,0,1)';  // Eraser tool color, which is effectively the background color
    }
  }

  changeEraserSize(newSize: number) {
    this.currentEraserSize = newSize;
    this.ctx.lineWidth = this.currentEraserSize;
  }

  // ... (Rest of your methods like startDrawing, doDrawing, etc.)
}
