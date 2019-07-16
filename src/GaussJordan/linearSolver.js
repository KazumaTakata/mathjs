import { Matrix2D } from 'matrix'

function gaussJordanElimination(A, b) {
  let height = A.height
  let width = A.width

  if (height != width) {
    console.warn('matrix A is not square!!')
  }

  let dim = height

  for (let i = 0; i < dim; i++) {
    // --------------------------
    // partial pivoting (
    // --------------------------
    let maxValue = A.Value[i][i]
    let maxIndex = i
    for (let p = i + 1; p < dim; p++) {
      if (Math.abs(A.Value[p][i]) > Math.abs(maxValue)) {
        maxValue = Math.abs(A.Value[p][i])
        maxIndex = p
      }
    }

    for (let k = 0; k < dim; k++) {
      let tmp = A.Value[maxIndex][k]
      A.Value[maxIndex][k] = A.Value[i][k]
      A.Value[i][k] = tmp
    }

    let tmp = b.Value[maxIndex]
    b.Value[maxIndex] = b.Value[i]
    b.Value[i] = tmp
    // -------------------------
    // -------------------------

    let pivot = A.Value[i][i]
    for (let k = i; k < dim; k++) {
      A.Value[i][k] /= pivot
    }
    b.Value[i] /= pivot

    for (let j = 0; j < dim; j++) {
      if (i == j) {
        continue
      }
      let coff = A.Value[j][i]
      for (let k = i; k < dim; k++) {
        A.Value[j][k] -= A.Value[i][k] * coff
      }
      b.Value[j] -= b.Value[i] * coff
    }
  }
}

export { gaussJordanElimination }
