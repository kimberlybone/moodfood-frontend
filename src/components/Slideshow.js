import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'

class Slideshow extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }

  showRecipeName = () => {
    const { recipes } = this.props
    // return recipes.map(recipe => {
    //   return <h4>{recipe.name}</h4>
    // })
  }

  render(){
    console.log(this.props.recipes)
    const { recipes } = this.props
    return(
      <div className='slideshow-div'>
            <p>{recipes[0].name}</p>
          <div>
            <button> Back </button>
            <img src={recipes[0].image} className='r-image' alt='food'></img>
            <button> View All Recipes </button>
            <button> View This Recipe </button>
            <button> Next </button>
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
