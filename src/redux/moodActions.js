const changeColor = colors => ({type: 'COLOR', colors})

export const clickToChangeColor = e => dispatch => {
  dispatch(changeColor(e.target.name))
}
