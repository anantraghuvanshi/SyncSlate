import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
})
export class WhiteboardComponent {
  isDrawing = false;

  @ViewChild('whiteboardCanvas') canvasRef!: ElementRef;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = 800;
    this.canvas.height = 600;
  }

  startDrawing(event: MouseEvent): void {
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      event.clientX - this.canvas.offsetLeft,
      event.clientY - this.canvas.offsetTop
    );
  }

  doDrawing(event: MouseEvent): void {
    if (!this.isDrawing) return;

    this.ctx.lineTo(
      event.clientX - this.canvas.offsetLeft,
      event.clientY - this.canvas.offsetTop
    );
    this.ctx.stroke();
  }

  stopDrawing(): void {
    this.isDrawing = false;
    this.ctx.closePath();
  }
}
