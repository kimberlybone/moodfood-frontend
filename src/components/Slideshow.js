import React from 'react'
import { fetchRecipesByMood } from '../redux/recipeActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../Stylesheets/MoodContainer.css'

class Slideshow extends React.Component {

  state = {
    index: 0
  }

  componentDidMount() {
    const { match: {params: {slug}}, fetchRecipesByMood } = this.props

    switch (slug){
      case "adventurous":
      fetchRecipesByMood('Adventurous')
      localStorage.mood = "adventurous"
      break
      case "angry":
      fetchRecipesByMood('Angry')
      localStorage.mood = "angry"
      break
      case "anxious":
      fetchRecipesByMood('Anxious')
      localStorage.mood = "anxious"
      break
      case "calm":
      fetchRecipesByMood('Calm')
      localStorage.mood = "calm"
      break
      case "happy":
      fetchRecipesByMood('Happy')
      localStorage.mood = "happy"
      break
      case "stressed":
      fetchRecipesByMood('Stressed')
      localStorage.mood = "stressed"
      break
      case "romantic":
      fetchRecipesByMood('Romantic')
      localStorage.mood = "romantic"
      break
      case "sad":
      fetchRecipesByMood('Sad')
      localStorage.mood = "sad"
      break
      case "hungry":
      fetchRecipesByMood('Indifferent')
      localStorage.mood = "indifferent"
      break
    }
  }

  moreRecipes = () => {
    const { props: { recipes: { recipes} }, state: { index } } = this
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

  viewAllRecipes = () => {
    const { history } = this.props
    history.push('/home')
  }

  displayRecipeName = () => {
    const { recipes } = this.props.recipes
    console.log(recipes)
    if(recipes && recipes.length > 0){
      const limitedRecipes = recipes.slice(this.state.index, this.state.index + 1)
      return limitedRecipes.map(recipe => {
        return <p key={recipe.name}>{recipe.name}</p>
      })
    } else {
      return <p> Loading your recipe's name...</p>
    }
  }


  displayRecipeImage = () => {
    const { recipes } = this.props.recipes
    // console.log('Slideshow Props:', this.props)

    if(recipes && recipes.length > 0){
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
    const { props: { recipes: { recipes } }, state: { index } } = this
    const correctIndex = index + 1

    return(
      <div className='slideshow-div'>
        <div>
          <button className='slideshow-btn' onClick={ () => this.lessRecipes() }> Back </button>
        </div>
          <div>

        { this.displayRecipeImage() }
        { this.displayRecipeName() }
        {
          recipes ?
          <p>{ correctIndex } of { recipes.length }</p>
          :
          <p>Loading...</p>
        }
        <button className='view-all-btn' onClick={ this.viewAllRecipes }> View All Recipes </button>
          </div>
          <div>
            <button className='slideshow-btn' onClick={ () => this.moreRecipes()}> Next </button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ recipes: state.recipes.mood })

const mapDispatchToProps = { fetchRecipesByMood }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slideshow));
