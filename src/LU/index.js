import { Matrix2D, Vector } from 'matrix'

function LUDecomposition(A) {
  let height = A.height
  let width = A.width

  if (height != width) {
    console.warn('matrix A is not square!!')
  }

  let dim = height

  for (let j = 0; j < width; j++) {
    for (let i = 0; i < height; i++) {
      if (i < j + 1) {
        let a_ij = A.Value[i][j]
        let sum = 0
        for (let k = 0; k < i; k++) {
          sum += A.Value[i][k] * A.Value[k][j]
        }
        A.Value[i][j] = a_ij - sum
      } else {
        let a_ij = A.Value[i][j]
        let sum = 0
        for (let k = 0; k < j; k++) {
          sum += A.Value[i][k] * A.Value[k][j]
        }
        A.Value[i][j] = (1 / A.Value[j][j]) * (a_ij - sum)
      }
    }
  }
}

let mat = new Matrix2D(3, 3)
let initValue = [[9, 3, 6], [4, 6, 1], [1, 1, 7]]
mat.set(initValue)

LUDecomposition(mat)

console.log(mat)
