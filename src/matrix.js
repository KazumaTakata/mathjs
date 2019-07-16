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
}
export { Matrix2D, Vector }
