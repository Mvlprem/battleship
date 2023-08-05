import { queries } from './player'

/**
 * crestes a dialog to
 * display info about ships
 * & board to place player ships
 * @param {Function} to create chid div's for board
 * @returns {HTMLDialogElement}
 */
function createModal(createGrid) {
  const dialog = document.createElement('dialog')
  const popup = document.createElement('div')
  const heading = document.createElement('h2')
  const message = document.createElement('p')
  const shipName = document.createElement('span')
  const axis = document.createElement('button')
  const axisType = document.createElement('span')
  const board = document.createElement('div')

  heading.textContent = 'Welcome to battleship game'
  message.textContent = 'Place your '
  shipName.textContent = 'Carrier - 5'
  axis.textContent = 'AXIS - '
  axisType.textContent = 'X'
  popup.classList.add('popup')
  shipName.classList.add('ship')
  axisType.classList.add('axis')
  board.classList.add('player-board')

  popup.appendChild(heading)
  message.appendChild(shipName)
  popup.appendChild(message)
  axis.appendChild(axisType)
  popup.appendChild(axis)
  popup.appendChild(board)

  createGrid(board)
  dialog.appendChild(popup)
  document.body.appendChild(dialog)

  return dialog
}

/**
 * initialize's DOM queries
 * @argument {Function} queries
 */
document.addEventListener('DOMContentLoaded', queries)

export default createModal
