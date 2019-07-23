class Complex {
  constructor(r, i) {
    this.Re = r
    this.Im = i
  }

  add(com) {
    let Re = this.Re + com.Re
    let Im = this.Im + com.Im
    let newCom = new Complex(Re, Im)
    return newCom
  }

  sub(com) {
    let Re = this.Re - com.Re
    let Im = this.Im - com.Im
    let newCom = new Complex(Re, Im)
    return newCom
  }

  mul(com) {
    let Re = this.Re * com.Re - this.Im * com.Im
    let Im = this.Re * com.Im + this.Im * com.Re

    let newCom = new Complex(Re, Im)
    return newCom
  }

  length() {
    return Math.sqrt(this.Re * this.Re + this.Im * this.Im)
  }
}

export { Complex }
