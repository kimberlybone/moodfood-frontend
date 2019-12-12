import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import RecipeReviewCard from '../components/RecipeReviewCard'
// import '../App.css'

class HomeContainer extends React.Component {

  state = {
    filteredItems: []
  }

  handleFilteredItems = (e, recipes) => {
  let new_recipes

    if(e.target.id === 'vegan'){
      new_recipes = recipes.filter( recipe => true === recipe.vegan )
    } else if (e.target.id === 'vegetarian') {
      new_recipes = recipes.filter( recipe => recipe.vegetarian )
    } else if (e.target.id === 'dairyFree') {
      new_recipes = recipes.filter( recipe => true === recipe.dairyFree )
    } else if (e.target.id === 'glutenFree') {
      new_recipes = recipes.filter( recipe => true === recipe.glutenFree )
    } else if ( e.target.id === 'all') {
      new_recipes = recipes
    }

    this.setState({
      filteredItems: new_recipes
    })
  }


  componentDidMount() {
    this.props.fetchRecipes()
  }

  displayRecipes = ( recipes ) => {
    console.log(recipes);
      return recipes.map(recipe => {
        return <div><RecipeReviewCard key={ recipe.id }
                           name={ recipe.name }
                           id={ recipe.id }
                           instructions={ recipe.instructions }
                           image={ recipe.image }
                           cookingMinutes={ recipe.cookingMinutes }/></div>
      })
  }

  render(){
    const { filteredItems } = this.state
    console.log(filteredItems);
    return(
      <div className='recipes-div'>
        <button onClick={e => this.handleFilteredItems(e, this.props.recipes)} id='vegan' className='vegan-option'><p id='vegan' className='home-text'>Vegan</p></button>
        <button onClick={e => this.handleFilteredItems(e, this.props.recipes)} id='vegetarian' className='vegetarian-option'><p id='vegetarian' className='home-text'>Vegetarian</p></button>
        <button onClick={e => this.handleFilteredItems(e, this.props.recipes)} id='glutenFree' className='gluten-option'><p id='glutenFree' className='home-text'>Gluten Free</p></button>
        <button onClick={e => this.handleFilteredItems(e, this.props.recipes)} id='dairyFree' className='dairy-option'><p id='dairyFree' className='home-text'>Dairy Free</p></button>
        <button onClick={e => this.handleFilteredItems(e, this.props.recipes)} id='all' className='all-option'><p id='all' className='home-text'>All</p></button>
        <div className='home-page'>{ filteredItems.length ? this.displayRecipes(this.state.filteredItems) : this.displayRecipes(this.props.recipes) }</div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes.allRecipes })

const mapDispatchToProps = { fetchRecipes }

export default connect( mapStateToProps, mapDispatchToProps )( HomeContainer );
