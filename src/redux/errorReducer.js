export default (state = [], { type, errors }) => {
  // console.log('errorReducer:', {type, errors})
  switch(type) {
    case 'ERRORS':
      return errors
    default:
      return state
  }
}
