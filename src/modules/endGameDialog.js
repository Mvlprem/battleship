/**
 * crestes a dialog to display winner
 * @param {string} message win or loose
 * @returns {HTMLDialogElement}
 */
function gameOverDialog(message) {
  const dialog = document.createElement('dialog')
  const heading = document.createElement('h1')
  const button = document.createElement('button')

  dialog.classList.add('end-game')
  button.classList.add('play-again')

  heading.textContent = message
  button.textContent = 'play again'

  dialog.appendChild(heading)
  dialog.appendChild(button)
  document.body.appendChild(dialog)

  return dialog
}

export default gameOverDialog
