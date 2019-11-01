import React from 'react'
import {NavLink} from 'react-router-dom'

export default class MoodContainer extends React.Component {
  render(){
    return(
      <div>
        <h1>How are you feeling today...</h1>
        <div className='emotions'>
          <p><NavLink to='/Slideshow'>Adventurous|Curious</NavLink></p>
          <p><NavLink to='/Slideshow'>Angry|Tense</NavLink></p>
          <p><NavLink to='/Slideshow'>Anxious|Stressed</NavLink></p>
          <p><NavLink to='/Slideshow'>Calm</NavLink></p>
          <p><NavLink to='/Slideshow'>Happy|Energetic</NavLink></p>
          <p><NavLink to='/Slideshow'>Indifferent</NavLink></p>
          <p><NavLink to='/Slideshow'></NavLink></p>
          <p><NavLink to='/Slideshow'></NavLink></p>
          <p><NavLink to='/Slideshow'></NavLink></p>
          <p><NavLink to='/Slideshow'>Just Hungry</NavLink></p>
        </div>
      </div>)
  }
}
