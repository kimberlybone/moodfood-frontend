export default (state = {}, { type, colors }) => {
  // console.log({type, colors });
  switch(type) {
    case 'COLOR':
      return colors
    // case 'RECIPE':
    // return recipe
    default:
      return state
  }
}
