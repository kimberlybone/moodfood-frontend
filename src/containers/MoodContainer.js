import React from 'react'
import { NavLink } from 'react-router-dom'
import { clickToChangeColor } from '../redux/moodActions'
import { connect } from 'react-redux'
import '../Stylesheets/MoodContainer.css'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Typical from 'react-typical'
import MyNotfication from '../style-components/MyNotification'



class MoodContainer extends React.Component {


  render(){
    const { clickToChangeColor } = this.props

    return(
      <div>
        <Typical
          steps={['Hello', 700, 'How are you feeling today?', 1500]}
          loop={Infinity}
          wrapper="h1"
        />
        <div className='emotions'>
          <p><NavLink onClick={e => {
                  store.addNotification({
                  title: 'ADVENTUROUS',
                  message: 'Here are some recipes to fulfill your ADVENTUROUS mood!',
                  type: 'info',                         // 'info', 'success', 'info', 'warning'
                  container: 'bottom-center',                // where to position the notifications
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
            <p><NavLink onClick={e => {
                    store.addNotification({
                    title: 'ANGRY',
                    insert: 'top',
                    message: 'Here are some recipes to fulfill your ANGRY mood!',
                    type: 'info',                         // 'info', 'success', 'info', 'warning'
                    container: 'bottom-center',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000
                    }
                  })
                  clickToChangeColor(e, 'Angry')
                }}
                      name='red'
                      to='/slideshow/angry'>Angry</NavLink></p>
            <p><NavLink onClick={e => {
                    store.addNotification({
                    title: 'ANXIOUS',
                    message: 'Here are some recipes to fulfill your ANXIOUS mood!',
                    type: 'info',                         // 'info', 'success', 'info', 'warning'
                    container: 'bottom-center',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000
                    }
                  })
                  clickToChangeColor(e, 'Anxious')}}
                       name='orange'
                       to='/slideshow/anxious'>Anxious</NavLink></p>
            <p><NavLink onClick={e => {
                    store.addNotification({
                    title: 'CALM',
                    message: 'Here are some recipes to fulfill your CALM mood!',
                    type: 'info',                         // 'info', 'success', 'info', 'warning'
                    container: 'bottom-center',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000
                    }
                  })
                  clickToChangeColor(e, 'Calm')}}
                       name='lightblue'
                       to='/slideshow/calm'>Calm</NavLink></p>
            <p><NavLink onClick={e => {
                    store.addNotification({
                    title: 'HAPPY',
                    message: 'Here are some recipes to fulfill your HAPPY mood!',
                    type: 'info',                         // 'info', 'success', 'info', 'warning'
                    container: 'bottom-center',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000
                    }
                  })
                  clickToChangeColor(e, 'Happy')}}
                      name='lightgreen'
                      to='/slideshow/happy'>Happy</NavLink></p>
            <p><NavLink onClick={e => {
                    store.addNotification({
                    title: 'STRESSED',
                    message: 'Here are some recipes to fulfill your STRESSED mood!',
                    type: 'info',                         // 'info', 'success', 'info', 'warning'
                    container: 'bottom-center',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000
                    }
                  })
                  clickToChangeColor(e, 'Stressed')}}
                       name='magenta'
                       to='/slideshow/indifferent'>Stressed</NavLink></p>
            <p><NavLink onClick={e => {
                    store.addNotification({
                    title: 'ROMANTIC',
                    message: 'Here are some recipes to fulfill your ROMANTIC mood!',
                    type: 'info',                         // 'info', 'success', 'info', 'warning'
                    container: 'bottom-center',                // where to position the notifications
                    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                    dismiss: {
                      duration: 5000
                    }
                  })
                  clickToChangeColor(e, 'Romantic')}}
                      name='lightpink'
                      to='/slideshow/romantic'>Romantic</NavLink></p>
           <p><NavLink onClick={e => {
                   store.addNotification({
                   title: 'SAD',
                   message: 'Here are some recipes to fulfill your SAD mood!',
                   type: 'info',                         // 'info', 'success', 'info', 'warning'
                   container: 'bottom-center',                // where to position the notifications
                   animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                   animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                   dismiss: {
                     duration: 5000
                   }
                 })
                 clickToChangeColor(e, 'Sad')}}
                      name='purple'
                      to='/slideshow/sad'>Sad</NavLink></p>
           <p><NavLink onClick={e => {
                   store.addNotification({
                   title: 'JUST HUNGRY',
                   message: 'Here are some recipes to fulfill your hunger!',
                   type: 'info',                         // 'info', 'success', 'info', 'warning'
                   container: 'bottom-center',                // where to position the notifications
                   animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                   animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                   dismiss: {
                     duration: 5000
                   }
                 })
                 clickToChangeColor(e, 'Indifferent')}}
                      name='white'
                      to='/slideshow/hungry'>Just Hungry</NavLink></p>
        </div>
      </div>)
  }
}

const mapStateToProps = state => ({ colors: state.colors, recipes: state.recipes })

const mapDispatchToProps = { clickToChangeColor }

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);
