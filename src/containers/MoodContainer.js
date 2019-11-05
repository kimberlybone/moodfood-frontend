import React from 'react'
import { NavLink } from 'react-router-dom'
import { clickToChangeColor } from '../redux/moodActions'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/MoodContainer.css'

// const colorArray = [
//   "red",
//   "lightblue",
//   "pink",
//   "orange",
//   "yellow",
//   "rosybrown",
//   "magenta"
// ]

class MoodContainer extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }


  render(){
    const { clickToChangeColor } = this.props
    // console.log(this.props)

    return(
      <div>
        <h1>How are you feeling today...</h1>
        <div className='emotions'>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='lightyellow' to='/slideshow'>Adventurous|Curious</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='red' to='/slideshow'>Angry|Tense</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='orange' to='/slideshow'>Anxious|Stressed</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='lightblue' to='/slideshow'>Calm</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='lightgreen' to='/slideshow'>Happy|Energetic</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='magenta' to='/slideshow'>Indifferent</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='rosybrown' to='/slideshow'></NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='lightpink' to='/slideshow'>Romantic</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='purple' to='/slideshow'>Sad</NavLink></p>
          <p onClick={e => clickToChangeColor(e)}><NavLink name='white' to='/slideshow'>Just Hungry</NavLink></p>
        </div>
      </div>)
  }
}

const mapStateToProps = state => ({ colors: state.colors, recipes: state.recipes })

const mapDispatchToProps = {
  clickToChangeColor: clickToChangeColor,
  fetchRecipes: fetchRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);
