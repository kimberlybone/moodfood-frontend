import React from 'react'
import { NavLink } from 'react-router-dom'

const colorArray = [
  "red",
  "lightblue",
  "pink",
  "orange",
  "yellow",
  "rosybrown",
  "magenta"
]

export default class MoodContainer extends React.Component {
  state = {
    color: "white"
  }

  changeColor(e) {
    this.setState({
      color: e.target.name
    })
  }

  render(){
    const stylesObj = {
      background: this.state.color
    };

    return(
      <div style={stylesObj}>
        <h1>How are you feeling today...</h1>
        <div className='emotions'>
          <p onClick={e => this.changeColor(e)}><NavLink name='lightyellow' to='/mood'>Adventurous|Curious</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='red' to='/mood'>Angry|Tense</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='orange' to='/mood'>Anxious|Stressed</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='lightblue' to='/mood'>Calm</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='lightgreen' to='/mood'>Happy|Energetic</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='magenta' to='/mood'>Indifferent</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='rosybrown' to='/mood'></NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='lightpink' to='/mood'>Romantic</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='purple' to='/mood'>Sad</NavLink></p>
          <p onClick={e => this.changeColor(e)}><NavLink name='white' to='/mood'>Just Hungry</NavLink></p>
        </div>
      </div>)
  }
}
