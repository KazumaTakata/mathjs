let N = 1000
let time = 10000
let C = 1.0

let TXarray = new Array(time)

for (let i = 0; i < time; i++) {
  let tmp = new Array(N)
  for (let i = 0; i < N; i++) {
    tmp[i] = 0
  }
  TXarray[i] = tmp
}

// should use smooth initial value like gaussian dis
function initializeWave(TXarray) {
  for (let i = 0; i < N; i++) {
    if (i == 0) {
      TXarray[0][i] = 0
    } else if (i == N - 1) {
      TXarray[0][i] = 0
    } else {
      TXarray[0][i] = Math.exp(-Math.pow((i - 500) / 20, 2)) * 1
      //   if (i < 2000 && i > 50) {
      //     TXarray[0][i] = Math.sin((i / 100) * 2 * Math.PI)
      //   } else {
      //     TXarray[0][i] = 0
      //   }
    }
  }
}

function updateFirstStep(TXarray) {
  for (let i = 0; i < N; i++) {
    if (i == 0) {
      TXarray[1][i] = 0
    } else if (i == N - 1) {
      TXarray[1][i] = 0
    } else {
      TXarray[1][i] =
        TXarray[0][i] -
        (1 / 2) *
          C *
          C *
          (TXarray[0][i + 1] - 2 * TXarray[0][i] + TXarray[0][i - 1])
    }
  }
}

function updateWave(TXarray) {
  for (let t = 1; t < time - 1; t++) {
    for (let i = 0; i < N; i++) {
      if (i == 0) {
        TXarray[t + 1][i] = 0
      } else if (i == N - 1) {
        TXarray[t + 1][i] = 0
      } else {
        TXarray[t + 1][i] =
          -TXarray[t - 1][i] +
          2 * TXarray[t][i] +
          C * C * (TXarray[t][i + 1] - 2 * TXarray[t][i] + TXarray[t][i - 1])
      }
    }
  }
}

initializeWave(TXarray)
updateFirstStep(TXarray)
updateWave(TXarray)

var canvas = document.createElement('canvas')

canvas.width = 2224
canvas.height = 768
canvas.style.zIndex = 8
canvas.style.position = 'absolute'
canvas.style.border = '1px solid'

var body = document.getElementsByTagName('body')[0]
body.appendChild(canvas)

var ctx = canvas.getContext('2d')

for (let t = 0; t < time; t++) {}

let STEP = 0

function step(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.moveTo(10, 600)
  for (let i = 0; i < N; i++) {
    ctx.lineTo(10 + i * 0.5, 600 - TXarray[STEP][i] * 100)
  }

  ctx.stroke()
  STEP++
  window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)

console.log(TXarray)
