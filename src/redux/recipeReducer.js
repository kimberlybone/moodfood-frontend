export default (state = {}, { type, recipes }) => {
  // console.log({type, recipes});
  switch(type) {
    case 'RECIPE':
      return {...recipes}
    default:
      return state
  }
}
