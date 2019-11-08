export default (state = { allRecipes: [], currentRecipe: {} }, { type, recipeInfo }) => {
  // console.log({type, recipes});
  switch(type) {
    case 'RECIPES':
      return { ...state, allRecipes: recipeInfo }
    case 'RECIPE':
      return { ...state, currentRecipe: recipeInfo }
    default:
      return state
  }
}
