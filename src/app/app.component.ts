import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  drawing = false;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  lastX: number;
  lastY: number;
  gradient: CanvasGradient;

  ngOnInit() {
    this.canvas = <HTMLCanvasElement> document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.gradient = this.ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
    this.setCanvasGradient('#FCE4E4', '#C1D4E2');
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  setCanvasGradient(startGradient: string, endGradient: string) {
    this.gradient.addColorStop(1, endGradient);
    this.gradient.addColorStop(0, startGradient);
  }

  move(event: MouseEvent) {
    if (this.drawing) {
      this.draw(event.clientX, event.clientY);
    }
  }

  down(event: MouseEvent) {
    this.drawing = true;
    this.draw(event.clientX, event.clientY);
  }

  draw(x: number, y: number) {
    if (this.drawing) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.gradient;
      this.ctx.lineWidth = 7;
      this.ctx.lineJoin = 'round';
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      if (Math.abs(x - this.lastX) < 30 && Math.abs(y - this.lastY) < 30) {
        this.ctx.closePath();
        this.ctx.stroke();
      }
      this.lastX = x;
      this.lastY = y;
    }
  }

  touch(event: TouchEvent) {
    this.drawing = true;
    this.draw(event.touches[0].clientX, event.touches[0].clientY);
  }

  clearDrawing() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
