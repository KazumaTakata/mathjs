import Component from 'kawaru'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" />
        </div>
        <canvas id="mainCanvas" />
      </div>
    )
  }
}

let component = new SimpleComponent()

let main = document.getElementById('main')
component.renderIn(main)
