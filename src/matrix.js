class Matrix2D {
  constructor(height, width) {
    let x = new Array(height)
    for (let i = 0; i < x.length; i++) {
      x[i] = new Array(width)
    }

    this.Value = x
    this.height = height
    this.width = width
  }

  set(array) {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.Value[i][j] = array[i][j]
      }
    }
  }
  zero() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.Value[i][j] = 0
      }
    }
  }
  identity() {
    if (this.height != this.width) {
      console.warn('matrix is not square')
    }
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (i == j) {
          this.Value[i][j] = 1
        } else {
          this.Value[i][j] = 0
        }
      }
    }
  }

  mul(mat) {
    if (this.width != mat.height) {
      console.warn('dimention mismatch')
    }
    let height = this.height
    let width = mat.width
    let newMat = new Matrix2D(height, width)

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let sum = 0
        for (let k = 0; k < this.width; k++) {
          sum += this.Value[i][k] * mat.Value[k][j]
        }
        newMat.Value[i][j] = sum
      }
    }
    return newMat
  }
  mulVec(vec) {
    if (this.width != vec.length) {
      console.warn('dimention mismatch')
    }

    let height = this.height

    let newVec = new Vector(height)

    for (let i = 0; i < height; i++) {
      let sum = 0
      for (let k = 0; k < this.width; k++) {
        sum += this.Value[i][k] * vec.Value[k]
      }
      newVec.Value[i] = sum
    }
    return newVec
  }

  add(mat) {
    if (this.width != mat.width) {
      console.warn('dimention mismatch')
    }
    if (this.height != mat.height) {
      console.warn('dimention mismatch')
    }

    let newMat = new Matrix2D(this.height, this.width)

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        newMat.Value[i][j] = this.Value[i][j] + mat.Value[i][j]
      }
    }

    return newMat
  }

  sub(mat) {
    if (this.width != mat.width) {
      console.warn('dimention mismatch')
    }
    if (this.height != mat.height) {
      console.warn('dimention mismatch')
    }

    let newMat = new Matrix2D(this.height, this.width)

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        newMat.Value[i][j] = this.Value[i][j] - mat.Value[i][j]
      }
    }

    return newMat
  }

  scalaMul(scala) {
    let newMat = new Matrix2D(this.height, this.width)
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        newMat.Value[i][j] = this.Value[i][j] * scala
      }
    }

    return newMat
  }
}

class Vector {
  constructor(n) {
    let x = new Array(n)
    this.Value = x
    this.length = n
  }

  set(array) {
    for (let i = 0; i < this.length; i++) {
      this.Value[i] = array[i]
    }
  }

  add(v) {
    let newVec = new Vector(this.length)
    for (let i = 0; i < this.length; i++) {
      newVec.Value[i] = this.Value[i] + v.Value[i]
    }

    return newVec
  }

  sub(v) {
    let newVec = new Vector(this.length)
    for (let i = 0; i < this.length; i++) {
      newVec.Value[i] = this.Value[i] - v.Value[i]
    }

    return newVec
  }

  dot(v) {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
      sum += this.Value[i] * v.Value[i]
    }

    return sum
  }

  crossProduct(v) {
    if (this.length != 3 || v.length != 3) {
      console.warn('vector should have 3 dimention')
    }
    let newVec = new Vector(3)
    newVec.Value[0] = this.Value[1] * v.Value[2] - this.Value[2] * v.Value[1]
    newVec.Value[1] = this.Value[2] * v.Value[0] - this.Value[0] * v.Value[2]
    newVec.Value[2] = this.Value[0] * v.Value[1] - this.Value[1] * v.Value[0]

    return newVec
  }

  scalaMul(scala) {
    let newVec = new Vector(this.length)
    for (let i = 0; i < this.length; i++) {
      newVec.Value[i] = this.Value[i] * scala
    }

    return newVec
  }

  outerProduct(v) {
    if (this.length != v.length) {
      console.warn('dimention mismatch')
    }
    let newMat = new Matrix2D(this.length, this.length)
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        newMat.Value[i][j] = this.Value[i] * v.Value[j]
      }
    }
    return newMat
  }

  norm() {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
      sum += this.Value[i] * this.Value[i]
    }

    return Math.sqrt(sum)
  }

  norm2() {
    let norm = this.norm()
    return norm * norm
  }

  zero() {
    for (let i = 0; i < this.length; i++) {
      this.Value[i] = 0
    }
  }
}
export { Matrix2D, Vector }
