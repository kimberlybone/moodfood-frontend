export default (state = { allRecipes: [], currentRecipe: {}, mood: {} }, action ) => {
  // console.log('Reducer:', action);
  switch(action.type) {
    case 'RECIPES':
      return { ...state, allRecipes: action.recipes }
    case 'RECIPE':
      return { ...state, currentRecipe: action.recipe }
    case 'MOOD':
      return { ...state, mood: action.mood }
    default:
      return state
  }
}
