import React, { Component } from 'react'

import './app.scss'

import Header from '../Header/Header.js'

class App extends Component {
  render () {
    return (
      <div className='main-app'>
        <Header
          logo='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        />
      </div>
    )
  }
}

export default App
