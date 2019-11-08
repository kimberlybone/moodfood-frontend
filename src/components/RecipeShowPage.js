import React from 'react'
import { fetchRecipes, fetchIndividualRecipe } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'

class RecipeShowPage extends React.Component {
  componentDidMount(){
    this.props.fetchIndividualRecipe(this.props.info.match.params.id)
  }

  // create action to fetch to the show page in backend


  render(){
    const { recipe } = this.props
    console.log(recipe)
    return(
      <div className='recipe-page'>
        { recipe.image ?
          <img src={ recipe.image } alt='food' className='recipe-img'></img>
          :
          <p>Loading your image...</p>

        }
        <div>
        {recipe.name}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipe: state.recipes.currentRecipe })

const mapDispatchToProps = { fetchRecipes: fetchRecipes, fetchIndividualRecipe: fetchIndividualRecipe }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShowPage);
