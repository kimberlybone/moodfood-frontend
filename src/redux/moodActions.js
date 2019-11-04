const changeColor = colors => ({ type: 'COLOR', colors })
const showRecipesForMood = recipes => ({ type: 'RECIPE', recipes })

const recipeURL = 'http://localhost:3000'

export const clickToChangeColor = e => dispatch => {
  dispatch(changeColor(e.target.name))
}

export const fetchRecipes = recipes => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(recipes)
  }
  fetch(recipeURL + '/recipes')
  .then(res => res.json())
  .then(console.log)
}
