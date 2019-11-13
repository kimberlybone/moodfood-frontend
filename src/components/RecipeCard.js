import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'

class RecipeCard extends React.Component {

  render(){
    console.log(this.props);
    const { name, instructions, image } = this.props
    return(
      <div className='recipe-card'>
      <img src={ image } alt='food' className='slideshow-img'></img>
        <div>
        <p>{ name }</p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
