import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
// import { clickToGoToRecipePage } from '../redux/moodActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../Assets/MoodContainer.css'

class Slideshow extends React.Component {

  state = {
    index: 0
  }

  componentDidMount() {
    this.props.fetchRecipes()
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


  onImageClick = e => {
    const { history } = this.props
      return history.push(`/recipes/${ e.target.name }`)
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
        return <img src={ recipe.image }
                    name={ recipe.id }
                    alt='food'
                    className='slideshow-img'
                    onClick={ e => this.onImageClick(e)}
                    key={`img- ${recipe.id}`}></img>
      })

    } else {
      return <p> Loading your image...</p>
    }
  }


  render(){
    // console.log(this.props);
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

const mapStateToProps = state => ({ recipes: state.recipes.allRecipes })

const mapDispatchToProps = {
  fetchRecipes: fetchRecipes,
  // clickToGoToRecipePage: clickToGoToRecipePage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slideshow));
