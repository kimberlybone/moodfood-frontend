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

        return <div><li key={new_ingredient.name}>{new_ingredient.name}</li>
                    <img className='ing-img' key={ingredient.id} src={ imageName } alt='ing'></img>
                  </div>
    })
  }



  render(){
    const { recipe } = this.props
    const new_price = recipe.price_per_serving/100
    console.log(recipe)

    return(
      <div className='recipe-page'>
        {
          recipe.image ?
          <img src={ recipe.image } alt='food' className='recipe-img'></img>
          :
          <p> Loading your image... </p>
        }
        <div className='info-recipe-div'>
          { recipe.preparationMinutes ? <p> Preparation Time:<h4>{ recipe.preparationMinutes } minutes</h4> </p> : <h6> Loading...</h6>}
          { recipe.cookingMinutes ? <p> Cooking Time:<h4>{ recipe.cookingMinutes } minutes</h4> </p> : null}
          { recipe.servings ? <p> Servings:<h4>{ recipe.servings }</h4> </p> : <h6> Loading...</h6>}
          { recipe.price_per_serving ? <p> Per Serving:<h4>${ new_price }</h4> </p> : <h6> Loading...</h6>}

        </div>
        <div className='info-recipe-div'>

        <h3> Feeling { localStorage.mood }?</h3>
        <h1> Try { recipe.name } </h1>

        {
          recipe.instructions ?
          <h6> { recipe.instructions } </h6>
          :
          <p>Sorry! There are no instructions to display for this recipe but here is the link to the recipe's website: </p>
        }
        { recipe.pairing_text ? <p> Wine Pairing:<h5>{ recipe.pairing_text }</h5> </p> : null }
      </div>
        <div className='ing-div'>
          <p><h4>Ingredients:</h4></p>
          { recipe.ingredients ? this.showIngredientImage() : <p>Loading image...</p> }
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({ recipe: state.recipes.currentRecipe, mood: state.recipes.mood })

const mapDispatchToProps = { fetchRecipes: fetchRecipes, fetchIndividualRecipe: fetchIndividualRecipe }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShowPage);
