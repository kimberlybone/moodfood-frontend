const changeColor = colors => ({ type: 'COLOR', colors })
const goToRecipePage = recipe => ({ type: 'RECIPE', recipe })


export const clickToChangeColor = e => dispatch => {
  dispatch(changeColor(e.target.name))
  localStorage.color = e.target.name
}

export const clickToGoToRecipePage = e => dispatch => {
  dispatch(goToRecipePage(e.target.name))
}
