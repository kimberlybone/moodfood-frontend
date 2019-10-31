// const initialState = {}

export defualt (state = {}, { type, user }) => {
  switch (type) {
    case 'SET_USER':
      return {
      ...state,
      ...user
  }
    case 'CLEAR_USER':
      return {}
    default:
      return state
  }
}
