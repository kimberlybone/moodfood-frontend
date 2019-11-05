export default (state = {}, { type, colors, recipes }) => {
  console.log({type, colors, recipes});
  switch(type) {
    case 'COLOR':
      return colors
    default:
      return state
  }
}
