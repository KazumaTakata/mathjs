class trapezoidalRule {
  constructor(func, range, N) {
    this.func = func
    this.range = range
    this.N = N
  }

  integration() {
    let x_0 = this.range.a
    let x_n = this.range.b

    let h = (x_n - x_0) / this.N
    // let f_i = new Array(this.N + 1)
    let sum = 0
    for (let i = 0; i < this.N + 1; i++) {
      if (i == 0 || i == this.N) {
        sum += this.func(x_0 + h * i) / 2
      } else {
        sum += this.func(x_0 + h * i)
      }
    }

    return h * sum
  }
}

let func = Math.exp

let trap = new trapezoidalRule(func, { a: 0, b: 1 }, 10000)

let ans = trap.integration()

console.log(ans)
