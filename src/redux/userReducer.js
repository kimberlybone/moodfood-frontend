// const initialState = {} 

export default (state = {}, { type, user }) => {
  switch(type) {
    case 'SET_USER':
    // console.log('reducer: ', user);
      return {
      ...user
      }
    case 'CLEAR_USER':
      return {}
    default:
      return state
  }
}
