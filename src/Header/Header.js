import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  render () {
    return (
      <div id='header'>
        <img
          src={this.props.logo}
          className='react-logo'
        />
        React is working! Wooohooo
      </div>
    )
  }
}

Header.propTypes = {
  logo: PropTypes.string
}

export default Header
