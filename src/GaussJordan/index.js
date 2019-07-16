import { Matrix2D, Vector } from 'matrix'
import { gaussJordanElimination } from './linearSolver'

let mat = new Matrix2D(3, 3)
let initValue = [[3, 2, 5], [1, 1, 4], [4, 1, 3]]
mat.set(initValue)

let initB = [2, 3, 1]
let vec = new Vector(3)

vec.set(initB)

gaussJordanElimination(mat, vec)

console.log(vec)
