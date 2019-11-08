const changeColor = colors => ({ type: 'COLOR', colors })
// const showRecipesForMood = recipes => ({ type: 'RECIPE', recipes })

// const recipeURL = 'http://localhost:3000'

export const clickToChangeColor = e => dispatch => {
  dispatch(changeColor(e.target.name))
  localStorage.color = e.target.name
}

// export const fetchRecipes = recipes => dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': localStorage.token
//     }
//     // body: JSON.stringify(recipes)
//   }
//   fetch(recipeURL + '/recipes', config)
//   .then(res => res.json())
//   .then(recipes => {
//     // console.log(recipes)
//     dispatch(showRecipesForMood(recipes))
//   })
// }
