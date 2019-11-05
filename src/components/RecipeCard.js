import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'

class RecipeCard extends React.Component {
  render(){
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
const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
