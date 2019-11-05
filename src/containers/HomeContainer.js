import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render(){
    const { recipes } = this.props

    return(
      <div>
        Home Container
        <RecipeCard/>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = {
  fetchRecipes: fetchRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
