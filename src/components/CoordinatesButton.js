// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    let x = e.screenX
    let y = e.screenY
    this.props.onReceiveCoordinates([x,y])
  }
  render() {
    return <button onClick={this.handleClick}></button>
  }
}

export default CoordinatesButton
