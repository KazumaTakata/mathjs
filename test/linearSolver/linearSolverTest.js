import './style.css'
import Component from 'kawaru'
import { Matrix2D, Vector } from 'matrix'
import { gaussJordanElimination } from 'GaussJordan/linearSolver'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: ['', '', '', '', '', '', '', '', '', '', '', ''],
      answer: ['', '', '']
    }
    this.handler = this.handler.bind(this)
    this.solve = this.solve.bind(this)
  }

  handler(event) {
    let newvalues = this.state.values
    newvalues[event.target.id] = event.target.value
    this.setState({ values: newvalues })
    console.log(this.state.values[event.target.id])
  }

  solve() {
    let mat = new Matrix2D(3, 3)
    let initValue = [
      [
        Number(this.state.values[0]),
        Number(this.state.values[1]),
        Number(this.state.values[2])
      ],
      [
        Number(this.state.values[3]),
        Number(this.state.values[4]),
        Number(this.state.values[5])
      ],
      [
        Number(this.state.values[6]),
        Number(this.state.values[7]),
        Number(this.state.values[8])
      ]
    ]
    mat.set(initValue)

    let initB = [
      this.state.values[9],
      this.state.values[10],
      this.state.values[11]
    ]
    let vec = new Vector(3)

    vec.set(initB)

    gaussJordanElimination(mat, vec)

    this.setState({ answer: [vec.Value[0], vec.Value[1], vec.Value[2]] })
  }

  renderEqu(i) {
    return (
      <div>
        <input
          type="text"
          id={0 + i * 3}
          value={this.state.values[0 + i * 3]}
          onChange={e => this.handler(e)}
        />
        x
        <input
          type="text"
          id={1 + i * 3}
          value={this.state.values[1 + i * 3]}
          onChange={e => this.handler(e)}
        />
        y
        <input
          type="text"
          id={2 + i * 3}
          value={this.state.values[2 + i * 3]}
          onChange={e => this.handler(e)}
        />
        z
      </div>
    )
  }

  renderB(i) {
    return (
      <div>
        <input
          type="text"
          id={9 + i}
          value={this.state.values[9 + i]}
          onChange={e => this.handler(e)}
        />
      </div>
    )
  }

  render() {
    let variables = ['x', 'y', 'z']
    let numbers = [1, 2, 3]

    return (
      <div>
        <h1>Gauss Jordan Elimination</h1>
        <p>Fill in below equation with number as you like.</p>
        <div className="equation">
          <div>
            {this.renderEqu(0)}
            {this.renderEqu(1)}
            {this.renderEqu(2)}
          </div>
          <div className="equal">=</div>
          <div>
            {this.renderB(0)}
            {this.renderB(1)}
            {this.renderB(2)}
          </div>
        </div>
        <div className="container">
          <button onClick={this.solve}>Solve</button>
        </div>
        <div className="container">
          <h3>Answer</h3>
        </div>
        <div className="container">
          <div className="equation">
            <div>
              <div>x</div>
              <div>y</div>
              <div>z</div>
            </div>
            <div className="equal">=</div>
            <div>
              <div>{this.state.answer[0]}</div>
              <div>{this.state.answer[1]}</div>
              <div>{this.state.answer[2]}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let component = new SimpleComponent()

let main = document.getElementById('main')
component.renderIn(main)
