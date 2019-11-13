import React from 'react'
import { fetchRecipes, fetchIndividualRecipe } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'
import '../Stylesheets/RecipePage.css'

class RecipeShowPage extends React.Component {
  componentDidMount(){
    this.props.fetchIndividualRecipe(this.props.info.match.params.id)
  }


  showIngredientImage = () => {
   const { recipe } = this.props
   return  recipe.ingredients.map(ingredient => {
      const imageName = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
      const new_ingredient = recipe.recipe_ingredients.find(ri => ri.ingredient_id === ingredient.id)
      console.log(new_ingredient);
        return <div><li key={new_ingredient.name}>{new_ingredient.name}</li>
                    <img className='ing-img' key={ingredient.id} src={ imageName } alt='ing'></img>
                  </div>
    })
  }



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
        <h4>Ingredients:</h4>
        <div className='ing-div'>
          { recipe.ingredients ? this.showIngredientImage() : <p>Loading image...</p> }
        </div>

        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipe: state.recipes.currentRecipe, mood: state.recipes.mood })

const mapDispatchToProps = { fetchRecipes: fetchRecipes, fetchIndividualRecipe: fetchIndividualRecipe }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShowPage);
