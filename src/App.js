import React, {Component} from 'react'

class App extends Component {

  render () {
    return (
      <h1 style={{textAlign: "center"}}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          style={
            {
              width: "80px",
              verticalAlign: "middle"
            }
          }
        />

        React is working! Wooohooo
      </h1>
    )
  }
}

export default App