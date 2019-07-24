import { Complex } from './complexNumber'
import { Vector } from 'matrix'

function fourierTransform(x) {
  let N = x.length
  let freqArray = new Array(N)
  for (let k = 0; k < N; k++) {
    let sum = new Complex(0, 0)
    for (let n = 0; n < N; n++) {
      let h = new Complex(x.Value[n], 0)
      let exp = exponential((k * n) / N)
      sum = sum.add(h.mul(exp))
    }
    freqArray[k] = sum
  }

  return freqArray
}

function exponential(knN) {
  let Re = Math.cos(2 * Math.PI * knN)
  let Im = Math.sin(2 * Math.PI * knN)
  let newCom = new Complex(Re, Im)
  return newCom
}

let sampleData = new Array(2048)
let sample = new Vector(2048)

for (let i = 0; i < 2048; i++) {
  sampleData[i] =
    Math.sin((1 / 1024) * 2 * Math.PI * 211 * i) +
    Math.sin((1 / 1024) * 2 * Math.PI * 100 * i) +
    0.00000001 * i * i * i
}

sample.set(sampleData)

let freqArray = fourierTransform(sample)

var canvas = document.createElement('canvas')

canvas.width = 2224
canvas.height = 768
canvas.style.zIndex = 8
canvas.style.position = 'absolute'
canvas.style.border = '1px solid'

var body = document.getElementsByTagName('body')[0]
body.appendChild(canvas)

var ctx = canvas.getContext('2d')
ctx.moveTo(10, 600)

for (let i = 0; i < 2048; i++) {
  ctx.lineTo(10 + i * 0.4, 600 - freqArray[i].length() / 100)
}

ctx.stroke()

console.log(freqArray)
