export default (state = { allRecipes: [], currentRecipe: {} }, action ) => {
  console.log('Recipe:', action);
  switch(action.type) {
    case 'RECIPES':
      return { ...state, allRecipes: action.recipes }
    case 'RECIPE':
      return { ...state, currentRecipe: action.recipe }
    default:
      return state
  }
}
