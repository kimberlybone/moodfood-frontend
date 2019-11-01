export default (state = {}, { type, colors }) => {
  console.log({type, colors});
  switch(type) {
    case 'COLOR':
    // console.log('reducer: ', user);
      return colors
    default:
      return state
  }
}
