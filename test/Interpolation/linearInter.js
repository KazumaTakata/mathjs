import Component from 'kawaru'
import '../style/index.scss'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let canvas = document.getElementById('mainCanvas')
    let canvasWidth = 400
    let canvasHeight = 400
    let paddingSize = 50
    let upleft = { x: paddingSize, y: paddingSize }
    let downleft = { x: paddingSize, y: canvasHeight - paddingSize }
    let upright = { x: canvasWidth - paddingSize, y: paddingSize }
    let downright = {
      x: canvasWidth - paddingSize,
      y: canvasHeight - paddingSize
    }
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(upleft.x, upleft.y)
    ctx.lineTo(downleft.x, downleft.y)
    ctx.lineTo(downright.x, downright.y)
    ctx.lineTo(upright.x, upright.y)
    ctx.lineTo(upleft.x, upleft.y)
    ctx.stroke()

    ctx.font = '20px Arial'
    ctx.fillText('x', canvasWidth / 2, canvasHeight - paddingSize / 4)

    ctx.fillText('y', paddingSize / 4, canvasHeight / 2)
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" />
        </div>
        <div className="container">
          <canvas id="mainCanvas" width="400" height="400" />
        </div>
      </div>
    )
  }
}

let component = new SimpleComponent()

let main = document.getElementById('main')
component.renderIn(main)
