import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'

class Slideshow extends React.Component {

  showRecipeName = () => {
    const { recipes } = this.props
    // return recipes.map(recipe => {
    //   return <h4>{recipe.name}</h4>
    // })
  }

  render(){
    // debugger
    console.log(this.props.recipes.name)
    const { recipes } = this.props
    return(
      <div className='slideshow-div'>
        <p>{recipes[0].name}</p>
        <div>
          <img src={recipes[0].image} alt='food'></img>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = {
  fetchRecipes: fetchRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
