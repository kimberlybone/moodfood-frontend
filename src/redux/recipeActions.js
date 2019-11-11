const showRecipesForMood = recipes => ({ type: 'RECIPES', recipes })
const getIndividualRecipe = recipe => ({ type: 'RECIPE', recipe })
const getRecipeByMood = mood => ({ type: 'MOOD', mood })

const URL = 'http://localhost:3000'

export const fetchRecipes = recipes => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  }
  fetch(URL + '/recipes', config)
  .then(res => res.json())
  .then(recipes => {
    // console.log(recipes)
    dispatch(showRecipesForMood(recipes))
  })
}

export const fetchIndividualRecipe = id => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  }
  fetch(URL + `/recipes/${id}`, config)
  .then(res => res.json())
  .then(recipe => {
    // console.log(recipe)
    dispatch(getIndividualRecipe(recipe))
  })
}



export const fetchRecipesByMood = name => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  }
  fetch(URL + `/moods/${name}`, config)
  .then(res => res.json())
  .then(mood => {
    // console.log("MoodRecipes:", mood)
    dispatch(getRecipeByMood(mood))
  })
}
