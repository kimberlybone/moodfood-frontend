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
    console.log(this.props)
    return(
      <div className='recipe-card'>
      Recipe Image
        <div>
        <p>-------------</p>
        Recipe Title
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipe: state.recipes.recipe })

const mapDispatchToProps = { fetchRecipes: fetchRecipes, fetchIndividualRecipe: fetchIndividualRecipe }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShowPage);
