import React from 'react'
import { fetchRecipes, fetchIndividualRecipe } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'

class RecipeShowPage extends React.Component {
  componentDidMount(){
    this.props.fetchIndividualRecipe(this.props.info.match.params.id)
  }

  showIngredientName = () => {
    const { recipe } = this.props
    return recipe.recipe_ingredients.map(ingredient => {
      return <li key={ingredient.id}>{ingredient.name}</li>
    })
  }

  // showIngredientImage = () => {
  //   const { recipe } = this.props
  //   return recipe.ingredients.map(ingredient => {
  //     return <img key={ingredient.id} src={ingredient.image} alt='ing'></img>
  //   })
  // }



  render(){
    const { recipe } = this.props
    console.log(this.props)
    return(
      <div className='recipe-page'>
        {
          recipe.image ?
          <img src={ recipe.image } alt='food' className='recipe-img'></img>
          :
          <p> Loading your image... </p>
        }
        <div>
        <h3> Feeling { localStorage.mood }?</h3>
        <h2> Try { recipe.name } </h2>

        {
          recipe.instructions ?
          <p> { recipe.instructions } </p>
          :
          <p>Sorry! There are no instructions to display for this recipe but here is the link to the recipe's website: </p>
        }
        Ingredients:
        {
          recipe.ingredients ?
        this.showIngredientName()
        :
        <p>Loading name...</p>
        }

        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipe: state.recipes.currentRecipe, mood: state.recipes.mood })

const mapDispatchToProps = { fetchRecipes: fetchRecipes, fetchIndividualRecipe: fetchIndividualRecipe }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShowPage);
