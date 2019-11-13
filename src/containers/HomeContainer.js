import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  displayRecipes = () => {
    const { recipes } = this.props

      return recipes.map(recipe => {
        return <RecipeCard key={ recipe.name }
                           name={ recipe.name }
                           instructions={ recipe.instructions }
                           image={ recipe.image }/>
      })
  }

  render(){
    return(
      <div>
        Home Container
        <p>{ this.displayRecipes() }</p>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes.allRecipes })

const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
