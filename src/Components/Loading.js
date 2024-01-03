import React, { Component } from 'react'
import spinner2 from './spinner2.gif'

export class Loading extends Component {
  render() {
    return (
      <div>
        <img src={spinner2} alt="spinner" />
        
      </div>
    )
  }
}

export default Loading
