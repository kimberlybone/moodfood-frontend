import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../Assets/MoodContainer.css'

class Slideshow extends React.Component {

  state = {
    index: 0
  }

  moreRecipes = () => {
    const { props: { recipes }, state: { index } } = this
    const increaseIndex = index + 1
    const newRecipeLength = recipes.length - 1

    if( index < newRecipeLength ){
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

  viewRecipe = () => {
    const { history, recipes } = this.props
    return recipes.map(recipe => {
      return history.push(`/recipes/${ recipe.id }`)
    })
  }

  displayRecipeName = () => {
    const { recipes } = this.props

    if(recipes.length > 0){
      const limitedRecipes = recipes.slice(this.state.index, this.state.index + 1)
      return limitedRecipes.map(recipe => {
        return <p key={recipe.name}>{recipe.name}</p>
      })
    } else {
      return <p> Loading your recipe's name...</p>
    }
  }
// do switch statement for slideshow moods comparing to slug

  displayRecipeImage = () => {
    const { recipes } = this.props

    if(recipes.length > 0){
      let limitedRecipes = recipes.slice(this.state.index, this.state.index + 1)
      return limitedRecipes.map(recipe => {
        return <img src={ recipe.image } name='image' alt='food' className='r-image' key={`img- ${recipe.id}`}></img>
      })
    } else {
      return <p> Loading your image...</p>
    }
  }

  // onImageClick = e => {
  //   e.target
  // }

  render(){
    console.log(this.props);
    const { props: { recipes }, state: { index } } = this
    const correctIndex = index + 1

    return(
      <div className='slideshow-div'>
        <div>
          <button className='slideshow-btn' onClick={ () => this.lessRecipes() }> Back </button>
        </div>
          <div>
            <button className='slideshow-btn'> View All Recipes </button>
        { this.displayRecipeImage() }
        { this.displayRecipeName() }
        <p>{ correctIndex } of { recipes.length }</p>
            <button className='slideshow-btn' onClick={ () => this.viewRecipe() }> View This Recipe </button>
          </div>
          <div>
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
