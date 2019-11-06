import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../Assets/MoodContainer.css'

class Slideshow extends React.Component {

  state = {
    index: 0
  }

  // showLimitedRecipes = () => {
  //   const { recipes } = this.props
  //   return recipes.slice(this.state.index, this.state.index + 1)
  // }

  moreRecipes = () => {
    const { props: { recipes }, state: { index } } = this
    const increaseIndex = index + 1
    const newRecipeLength = recipes.length - 1

    if( index < newRecipeLength ){
      debugger
      this.setState({
        index: increaseIndex
      })
    } else {
      return null
    }
  }

  lessRecipes = () => {
    const { index } = this.state
    const decreaseIndex = index - 1

    if(index > 0 ){
      this.setState({
        index: decreaseIndex
      })
    } else {
      return null
    }
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  viewRecipe = id => {
    const { history, recipes } = this.props
    history.push(`/recipes/${ id }`)
  }

  displayRecipeName = () => {
    const { recipes } = this.props

    if(recipes.length > 0){
      // debugger
      const limitedRecipes = recipes.slice(this.state.index, this.state.index + 1)
      return limitedRecipes.map(recipe => {
        return <p key={recipe.name}>{recipe.name}</p>
      })
    } else {
      return <p> Loading your recipe's name...</p>
    }
  }

  displayRecipeImage = () => {
    const { recipes } = this.props

    if(recipes.length > 0){
      let limitedRecipes = recipes.slice(this.state.index, this.state.index + 1)
      // debugger
      return limitedRecipes.map(recipe => {
        return <img src={ recipe.image } alt='food' className='r-image' key={`img- ${recipe.id}`}></img>
      })
    } else {
      return <p> Loading your image...</p>
    }
  }

  render(){
    console.log(this.props.recipes)
    return(
      <div className='slideshow-div'>
        { this.displayRecipeName() }
          <div>
            <button className='slideshow-btn' onClick={ () => this.lessRecipes() }> Back </button>
            <button className='slideshow-btn'> View All Recipes </button>
        { this.displayRecipeImage() }
            <button className='slideshow-btn' onClick={ null }> View This Recipe </button>
            <button className='slideshow-btn' onClick={ () => this.moreRecipes()}> Next </button>
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
