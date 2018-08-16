const UNIT_RADIUS = 5

class Recaman {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.seq = new Set([0]);
    this.currentSeq = 0;
    this.nextJumpSize = 1;
    this.iteration = 0;
  }

  get UNIT_RADIUS() {
    return UNIT_RADIUS;
  }

  get currentPos() {
    return this.currentSeq * this.UNIT_RADIUS;
  }

  reset() {
    this.seq = new Set([0]);
    this.currentSeq = 0;
    this.nextJumpSize = 1;
    this.iteration = 0;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  centerLine() {
    return Math.ceil(this.canvas.height / 2)
  }

  increment() {
    const interval = this.canGoBack() ? -this.nextJumpSize : this.nextJumpSize;
    console.log(interval);
    console.log(this.currentPos);
    this.currentSeq += interval;
    this.seq.add(this.currentSeq);
    this.nextJumpSize++;
    this.iteration++;
    const iter = document.querySelector('#iteration-counter');
    if (iter !== undefined){
      iter.innerText = `${this.iteration}`
    }
    return this
  }

  draw(iterations = 1) {
    for (let i = 0; i < iterations; i++) {
      const ctx = this.ctx
      const radius = (this.nextJumpSize / 2) * this.UNIT_RADIUS;
      console.log('radius', radius);
      let center = this.findNextCenter(radius);
      let start = 0;
      let end = Math.PI;
      if (this.nextJumpSize % 2 === 0) {
        start += Math.PI;
        end += Math.PI;
      }
      ctx.beginPath();
      ctx.arc(center, this.centerLine(), radius, start, end);
      ctx.stroke();
      this.increment();
    }
    return this;
  }

  findNextCenter(radius) {
    let center = 0;
    if (this.canGoBack()) {
      center = this.currentPos - radius;
    } else {
      center = this.currentPos + radius;
    }
    return center;
  }

  canGoBack() {
    const backNum = this.currentSeq - this.nextJumpSize;
    this.seq
    return (!this.seq.has(backNum) && backNum > 0);
  }

}



let currentSeq = 0
let nextJumpSize = 1


let recaman = new Set([0]);

const canvas = document.querySelector('#my-canvas')
canvas.height = 1000;
canvas.width = 1500;
const ctx = canvas.getContext('2d')
const vis = new Recaman(ctx, canvas);

const slider = document.querySelector('#iteration-slider');
slider.oninput = e => {
  vis.reset();
  vis.draw(e.target.value)
}

canvas.onclick = e => {
  vis.draw();
}