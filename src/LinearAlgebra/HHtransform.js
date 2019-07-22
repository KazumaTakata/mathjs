import { Matrix2D, Vector } from 'matrix'

// let mat = new Matrix2D(3, 3)
// let initValue = [[1, 0, 2], [2, -1, 3], [4, 1, 8]]
// mat.set(initValue)

function houseHolderMatrix(u) {
  let dim = u.length
  let iden = new Matrix2D(dim, dim)

  iden.identity()
  let U = u.outerProduct(u).scalaMul(2 / u.norm2())
  let P = iden.sub(U)

  return P
}

function generateU(x) {
  let oneVec = new Vector(x.length)
  oneVec.zero()
  oneVec.Value[0] = x.norm()
  return x.add(oneVec)
}

let vec = new Vector(3)
let initValue = [1, -2, 2]
vec.set(initValue)

let u = generateU(vec)

let P = houseHolderMatrix(u)

console.log(P)
