const canvas = document.querySelector('#my-canvas')
const ctx = canvas.getContext('2d')


const UNIT_RADIUS = 5

let currentPos = 0
let nextJumpSize = 1

let recaman = new Set([0]);

window.onresize = e => {
  console.log(e);
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  
}

console.log(recaman);

// draw top on odd, bottom on even

