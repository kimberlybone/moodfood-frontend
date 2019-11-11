import React from 'react'
import { NavLink } from 'react-router-dom'
import { clickToChangeColor } from '../redux/moodActions'
// import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/MoodContainer.css'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


class MoodContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchRecipes()
  // }


  render(){
    const { clickToChangeColor } = this.props

    return(
      <div>
        <h1>How are you feeling today...</h1>
        <div className='emotions'>
          <p><NavLink onClick={e => {
                  store.addNotification({
                  title: 'ADVENTUROUS',
                  message: 'Here are some recipes to fulfill your ADVENTUROUS mood!',
                  type: 'default',                         // 'default', 'success', 'info', 'warning'
                  container: 'bottom-left',                // where to position the notifications
                  animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                  animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                  dismiss: {
                    duration: 5000
                  }
                })
                clickToChangeColor(e, 'Adventurous')
              }}
              name='lightyellow'
              to='/slideshow/adventurous'>Adventurous</NavLink></p>
            <p><NavLink onClick={e => clickToChangeColor(e, 'Angry')}
                      name='red'
                      to='/slideshow/angry'>Angry</NavLink></p>
            <p><NavLink onClick={e => clickToChangeColor(e, 'Anxious')}
                       name='orange'
                       to='/slideshow/anxious'>Anxious</NavLink></p>
            <p><NavLink onClick={e => clickToChangeColor(e, 'Calm')}
                       name='lightblue'
                       to='/slideshow/calm'>Calm</NavLink></p>
            <p><NavLink onClick={e => clickToChangeColor(e, 'Happy')}
                      name='lightgreen'
                      to='/slideshow/happy'>Happy</NavLink></p>
            <p><NavLink onClick={e => clickToChangeColor(e, 'Stressed')}
                       name='magenta'
                       to='/slideshow/indifferent'>Stressed</NavLink></p>
            <p><NavLink onClick={e => clickToChangeColor(e, 'Romantic')}
                      name='lightpink'
                      to='/slideshow/romantic'>Romantic</NavLink></p>
           <p><NavLink onClick={e => clickToChangeColor(e, 'Sad')}
                      name='purple'
                      to='/slideshow/sad'>Sad</NavLink></p>
           <p><NavLink onClick={e => clickToChangeColor(e, 'Indifferent')}
                      name='white'
                      to='/slideshow/hungry'>Just Hungry</NavLink></p>
        </div>
      </div>)
  }
}

const mapStateToProps = state => ({ colors: state.colors, recipes: state.recipes })

const mapDispatchToProps = {
  clickToChangeColor: clickToChangeColor,
  // fetchRecipes: fetchRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);
