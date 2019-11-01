const changeColor = colors => ({type: 'COLOR', colors})

onClick = e => dispatch => {
  dispatch(changeColor(e.target.name))
}
