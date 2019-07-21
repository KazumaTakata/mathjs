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

function LUsolve(A, b) {
  let height = A.height
  let y = new Array(height)
  let x = new Array(height)
  y[0] = b[0]
  for (let i = 1; i < height; i++) {
    let sum = 0
    for (let j = 0; j < i; j++) {
      sum += A.Value[i][j] * y[j]
    }
    y[i] = b[i] - sum
  }

  x[height - 1] = y[height - 1] / A.Value[height - 1][height - 1]

  for (let i = height - 2; i > -1; i--) {
    let sum = 0
    for (let j = i + 1; j < height; j++) {
      sum += A.Value[i][j] * x[j]
    }
    x[i] = (y[i] - sum) / A.Value[i][i]
  }

  return x
}

function LUInterse(A) {
  let n = A.height
  let invA = new Array(n)
  for (let i = 0; i < n; i++) {
    let b = new Array(n)
    for (let j = 0; j < n; j++) {
      if (i == j) {
        b[j] = 1
      } else {
        b[j] = 0
      }
    }
    let x = LUsolve(A, b)
    invA[i] = x
  }

  let invA_T = new Array(n)
  for (let i = 0; i < n; i++) {
    invA_T[i] = new Array(n)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      invA_T[i][j] = invA[j][i]
    }
  }

  return invA_T
}

let mat = new Matrix2D(3, 3)
let initValue = [[1, 0, 2], [2, -1, 3], [4, 1, 8]]
mat.set(initValue)

LUDecomposition(mat)

// console.log(mat)

let x = LUsolve(mat, new Array(12, 17, 5))

// console.log(x)

let s = LUInterse(mat)
console.log(s)
