import React from 'react'
import { fetchRecipes } from '../redux/recipeActions'
import { connect } from 'react-redux'
import '../Assets/HomeContainer.css'
import { withRouter } from 'react-router-dom'



class RecipeCard extends React.Component {
  onImageClick = e => {
    const { history } = this.props
      return history.push(`/recipes/${ e.target.name }`)
  }

  render(){
    // console.log(this.props);
    const { name, image, id } = this.props
    return(
      <div className='recipe-card'>
      <img onClick={this.onImageClick} src={ image } name={id} alt='food' className='slideshow-img'></img>
        <div>
        <p>{ name }</p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = { fetchRecipes }

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( RecipeCard ));
