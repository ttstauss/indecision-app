class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && <p>Something to show</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let toggle = false

// const onToggle = () => {
//   toggle = !toggle
//   render()
// }

// const appRoot = document.getElementById('app')

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={ onToggle }>{ toggle ? 'Hide Details' : 'Show Details' }</button>
//       { toggle && <p>Something to show</p> }
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }

// render()