import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import RecipeReviewCard from '../components/RecipeReviewCard'

class HomeContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  displayRecipes = () => {
    const { recipes } = this.props

      return recipes.map(recipe => {
        return <div><RecipeReviewCard key={ recipe.name }
                           name={ recipe.name }
                           id={ recipe.id }
                           instructions={ recipe.instructions }
                           image={ recipe.image }/></div>
      })
  }

  render(){
    return(
      <div>
        <button className='home-options'><h5 className='home-text'>Vegan</h5></button>
        <button className='home-options'><h5 className='home-text'>Vegetarian</h5></button>
        <button className='home-options'><h5 className='home-text'>Gluten Free</h5></button>
        <button className='home-options'><h5 className='home-text'>Dairy Free</h5></button>
        <p className='home-page'>{ this.displayRecipes() }</p>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes.allRecipes })

const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
