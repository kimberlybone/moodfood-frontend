import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'

class RecipeShowPage extends React.Component {

  // create action to fetch to the show page in backend
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShowPage);
