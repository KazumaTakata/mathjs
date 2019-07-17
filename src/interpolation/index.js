import { LinearInterp } from './LinearInterpolation'

let points = [2, 3.4, 5, 10, 33, 56, 66, 91]
let Ys = [10, 1, 3, 7, 4, 11, 2, 1]
let x = 12

let linearInterp = new LinearInterp(points, Ys, 2)
let y = linearInterp.interp(x)
