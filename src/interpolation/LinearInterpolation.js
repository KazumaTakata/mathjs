class Interp {
  constructor(x, y, M) {
    this.Xs = x
    this.Ys = y
    this.M = M
  }

  Bisection(x) {
    let n = this.Xs.length

    let jl = 0
    let ju = n - 1

    while (ju - jl > 1) {
      let jm = Math.floor((ju + jl) / 2)
      if (this.Xs[jm] <= x) {
        jl = jm
      } else {
        ju = jm
      }
    }

    return Math.max(0, Math.min(n - this.M, jl - Math.floor((this.M - 2) / 2)))
  }
}

class LinearInterp extends Interp {
  constructor(x, y, M) {
    super(x, y, M)
  }
  interp(x) {
    let index_low = this.Bisection(x)
    if (this.Xs[index_low] == this.Xs[index_low + 1]) {
      return this.Ys[index_low]
    } else {
      return (
        this.Ys[index_low] +
        ((this.Ys[index_low + 1] - this.Ys[index_low]) /
          (this.Xs[index_low + 1] - this.Xs[index_low])) *
          (x - this.Xs[index_low])
      )
    }
  }
}

class PolynomialInterp extends Interp {
  constructor(x, y, M) {
    super(x, y, M)
    this.P = new Array(M)
  }
  interp(x) {
    let index_low = this.Bisection(x)

    for (let i = 0; i < this.M; i++) {
      for (let j = 0; j < this.M - i; j++) {
        if (i == 0) {
          this.P[index_low + j] = this.Ys[index_low + j]
        } else {
          this.P[j] =
            ((x - this.Xs[index_low + i + 1]) * this.P[j] +
              (this.Xs[index_low] - x) * this.P[j + 1]) /
            (this.Xs[index_low] - this.Xs[index_low + i])
        }
      }
    }

    return this.P[0]
  }
}
export { LinearInterp }
