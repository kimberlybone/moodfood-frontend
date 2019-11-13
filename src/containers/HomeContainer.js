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
        return <p><RecipeReviewCard key={ recipe.name }
                           name={ recipe.name }
                           id={ recipe.id }
                           instructions={ recipe.instructions }
                           image={ recipe.image }/></p>
      })
  }

  render(){
    return(
      <div>
        <button>Vegan</button>
        <button>Vegetarian</button>
        <button>Gluten Free</button>
        <button>Dairy Free</button>
        <p>{ this.displayRecipes() }</p>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes.allRecipes })

const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
