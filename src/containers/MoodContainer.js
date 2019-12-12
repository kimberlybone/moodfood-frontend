import React from 'react'
import { NavLink } from 'react-router-dom'
import { clickToChangeColor } from '../redux/moodActions'
import { connect } from 'react-redux'
import '../Stylesheets/MoodContainer.css'

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Typical from 'react-typical'



class MoodContainer extends React.Component {


  render(){
    const { clickToChangeColor } = this.props

    return(
      <div className='mood-div'>
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
              className='mood-link'
              name='https://foodrevolution.org/wp-content/uploads/blog-featured_purple_veggies_cropped-20180312.jpg'
              to='/slideshow/adventurous'>Adventurous</NavLink></p>
            <p><NavLink onClick={ e => {
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
                  clickToChangeColor( e, 'Angry' )
                }}
                      name='https://www.drfuhrman.com/content-image.ashx?id=75vhahqp78rt53i8ocuup0'
                      className='mood-link'
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
                  clickToChangeColor(e, 'Anxious')
                }}
                       name='http://static1.squarespace.com/static/53213059e4b0f7c737c339b1/t/5c46a3cc6d2a73efe1ef2ecc/1548133347499/Orange-Foods_Wordpress-Featured-Image.jpg?format=1500w'
                       className='mood-link'
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
                  clickToChangeColor(e, 'Calm')
                }}
                       className='mood-link'
                       name='https://i.kinja-img.com/gawker-media/image/upload/s--6qYml0gb--/c_scale,f_auto,fl_progressive,q_80,w_800/wnalflilwxg2b8vvtdin.jpg'
                       to='/slideshow/calm'>Calm</NavLink></p>
            <p><NavLink onClick={ e => {
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
                  clickToChangeColor(e, 'Happy')
                }}
                      className='mood-link'
                      name='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/kiwano-melon-1296x728-feature.jpg?w=1155&h=1528'
                      to='/slideshow/happy'>Happy</NavLink></p>
            <p><NavLink onClick={ e => {
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
                  clickToChangeColor(e, 'Stressed')
                }}
                      className='mood-link'
                       name='https://media.fromthegrapevine.com/assets/images/2018/4/red-pitaya.jpg.480x0_q71_crop-scale.jpg'
                       to='/slideshow/indifferent'>Stressed</NavLink></p>
            <p><NavLink onClick={ e => {
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
                  clickToChangeColor(e, 'Romantic')
                }}
                  className='mood-link'
                      name='https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/23/campaign_images/buzzfeed-prod-web09/17-heavenly-delicious-ways-to-eat-more-pink-food-2-25405-1468467179-0_dblbig.jpg'
                      to='/slideshow/romantic'>Romantic</NavLink></p>
           <p><NavLink onClick={ e => {
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
                 clickToChangeColor( e, 'Sad' )
               }}
                 className='mood-link'
                      name='https://i.pinimg.com/originals/4a/a0/52/4aa0520cd218c3094e1ff690edd27994.jpg'
                      to='/slideshow/sad'>Sad</NavLink></p>
           <p><NavLink onClick={ e => {
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
                 clickToChangeColor(e, 'Indifferent')
               }}
                 className='mood-link'
                      name='https://images.iphonephotographyschool.com/23050/1120/food.jpg'
                      to='/slideshow/hungry'>Just Hungry</NavLink></p>
        </div>
      </div>)
  }
}

const mapStateToProps = state => ({ colors: state.colors, recipes: state.recipes })

const mapDispatchToProps = { clickToChangeColor }

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);
