
import { fetchRecipesByMood } from './recipeActions'

const changeColor = colors => ({ type: 'COLOR', colors })

export const clickToChangeColor = (e, name) => dispatch => {
  dispatch(changeColor(e.target.name))
  localStorage.color = e.target.name
  dispatch(fetchRecipesByMood(name))
}
