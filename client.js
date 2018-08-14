const UNIT_RADIUS = 5

class Recaman {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.seq = new Set([0]);
    this.currentSeq = 0;
    this.nextJumpSize = 1;
    this.draw();
  }

  get UNIT_RADIUS() {
    return UNIT_RADIUS;
  }

  get currentPos() {
    return this.currentSeq * this.UNIT_RADIUS;
  }

  centerLine = () => Math.ceil(this.canvas.height / 2)


  draw() {
    const radius = (this.nextJumpSize / 2) * this.UNIT_RADIUS;
    let center = this.findNextCenter();
  }

  findNextCenter(){
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
    return (!this.seq.has(backNum) && backnum > 0);
  }

}


let currentSeq = 0
let nextJumpSize = 1


let recaman = new Set([0]);

const canvas = document.querySelector('#my-canvas')
canvas.height = 1000;
canvas.width = 1500;
const ctx = canvas.getContext('2d')
const vis = new Recaman(ctx);