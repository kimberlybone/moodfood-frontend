const initialState = {}

export defualt (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return payload
    case 'CLEAR_USER':
      return {}
    default:
      return state
  }
}
