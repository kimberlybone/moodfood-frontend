import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../Assets/MoodContainer.css'

class Slideshow extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  viewRecipe = id => {
    const { history, recipes } = this.props
    history.push(`/recipes/${ id }`)
  }

  

  render(){
    console.log(this.props.recipes)
    const { recipes, history } = this.props
    return(
      <div className='slideshow-div'>
        {
          recipes[0] ?
          <p>{recipes[0].name}</p>
          :
          <p> Loading your recipe's name...</p>
        }
          <div>
            <button className='slideshow-btn'> Back </button>
            <button className='slideshow-btn'> View All Recipes </button>
        {
          recipes[0] ?
          <img src={ recipes[0].image } alt='food' className='r-image'></img>
          :
          <p> Loading your image...</p>
        }
            <button className='slideshow-btn' onClick={ null }> View This Recipe </button>
            <button className='slideshow-btn'> Next </button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = {
  fetchRecipes: fetchRecipes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slideshow));
