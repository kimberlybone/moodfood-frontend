import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../Assets/MoodContainer.css'

class Slideshow extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  viewRecipe = id => {
    const { history, recipes } = this.props
    history.push(`/recipes/${ id }`)
  }

  displayRecipeName = () => {
    const { recipes } = this.props
    if(recipes.length > 0){
      return recipes.map(recipe => {
        return <p key={recipe.name}>{recipe.name}</p>
      })
    } else {
      return <p> Loading your recipe's name...</p>
    }
  }

  displayRecipeImage = () => {
      const { recipes } = this.props
    if(recipes.length > 0){
      return recipes.map(recipe => {
        return <img src={ recipe.image } alt='food' className='r-image'></img>
      })
    } else {
      return <p> Loading your image...</p>
    }
  }

  // displayRecipes = () => {
  //   return recipes.map(recipe => {
  //     return <RecipeCard  key={recipe.id} name={recipe.name} instructions={recipe.instructions} image={recipe.image}/>
  //   })
  // }

  render(){
    console.log(this.props.recipes)
    const { recipes, history } = this.props
    return(
      <div className='slideshow-div'>
        { this.displayRecipeName() }
          <div>
            <button className='slideshow-btn'> Back </button>
            <button className='slideshow-btn'> View All Recipes </button>
        { this.displayRecipeImage() }
            <button className='slideshow-btn' onClick={ null }> View This Recipe </button>
            <button className='slideshow-btn'> Next </button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = {
  fetchRecipes: fetchRecipes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slideshow));
