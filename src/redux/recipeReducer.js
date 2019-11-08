export default (state = [], { type, recipes }) => {
  // console.log({type, recipes});
  switch(type) {
    case 'RECIPES':
      return recipes
    default:
      return state
  }
}
