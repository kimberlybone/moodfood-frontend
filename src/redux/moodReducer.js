export default (state = {}, { type, colors, recipes }) => {
  console.log({type, colors, recipes});
  switch(type) {
    case 'COLOR':
      return colors
    case 'RECIPE':
      return recipes
    default:
      return state
  }
}
