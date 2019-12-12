// const initialState = {}

export default ( state = {}, { type, user } ) => {
  switch( type ) {
    case 'SET_USER':
      return {
      ...user
      }
    case 'CLEAR_USER':
      return {}
    default:
      return state
  }
}
