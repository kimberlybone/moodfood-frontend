export default (state = {}, { type, colors, recipe }) => {
  console.log({type, colors, recipe});
  switch(type) {
    case 'COLOR':
      return colors
    case 'RECIPE':
    return recipe
    default:
      return state
  }
}
