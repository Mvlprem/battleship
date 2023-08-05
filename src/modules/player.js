import { initializeGamePlay } from './gameplay'
import {
  ships,
  placeShip,
  playerShipsLocation,
  computerShipsLocation,
} from './ship'

let blocks
let btnAxis

/**
 * change axis from horizontal to vertical & vice versa
 * 'X' horizontal, 'Y' vertical
 */
function changeAxis() {
  const axis = document.querySelector('.axis')
  const direction = axis.textContent
  if (direction === 'X') axis.textContent = 'Y'
  if (direction === 'Y') axis.textContent = 'X'
}

/**
 * check weather the axis is horizontal or not
 * @returns {boolean}
 */
function isHorizontal() {
  const axis = document.querySelector('.axis').textContent
  return axis === 'X'
}

/**
 * check if there is a ship at selected block
 * @param {number} block selected block on grid
 * @param {Array} shipLocation location of previous ships
 * @returns {boolean}
 */
function shipInPlace(block, shipLocation) {
  if (shipLocation.length === 0) return false
  return shipLocation.some((location) => location.includes(block))
}

/**
 * check computer ships overlapping with previous ones
 * @param {number} id selected block on grid
 * @param {boolean} horizontal direction of ship
 * @returns {boolean}
 */
function checkShipOverlap(id, horizontal, shipLocation) {
  const currentShip = []
  const shipLength = ships[shipLocation.length].length
  for (let i = 0; i <= shipLength; i += 1) {
    if (horizontal) currentShip.push(id + i)
    if (!horizontal) currentShip.push(id + i * 10)
  }
  if (shipLocation.length === 0) return false
  const previousShips = shipLocation.flat()
  return currentShip.some((num) => previousShips.includes(num))
}

/**
 * check if the ship can be placed at selected location or not
 * @param {number} selected block on the grid
 * @param {boolean} horizontal direction to place ship
 * @param {Array} shipLocation to get the current ship length
 * @returns {boolean}
 */
function isValidPosition(selected, horizontal, shipLocation) {
  const width = 10
  const height = width * width
  const shipLength = ships[shipLocation.length].length
  if (horizontal) return selected % width <= width - shipLength
  return selected % height < width + (height - width * shipLength)
}

/**
 * replace player-board with board in dialog
 * & removes dialog from DOM
 */
function closeDialog() {
  const playerBoard = document.querySelector('.game-board > .player-board')
  const dialogBoard = document.querySelector('dialog .player-board')
  const dialog = document.querySelector('dialog')
  playerBoard.parentElement.replaceChild(dialogBoard, playerBoard)
  dialog.remove()
}

// display info of next ship to be placed
function nextShip() {
  const ship = document.querySelector('.ship')
  const value = playerShipsLocation.length
  const { name } = ships[value]
  const shipLength = ` - ${ships[value].length}`
  ship.textContent = name + shipLength
}

/**
 * checks if ship placement is possible
 * calls placeShip() function to place ship
 */
function addComputerShips() {
  //  check if all ships are placed
  if (computerShipsLocation.length === ships.length) return
  const id = Math.floor(Math.random() * 100)

  // change axis on each call to randomize ships
  changeAxis()
  const horizontal = isHorizontal()
  const occupied = shipInPlace(id, computerShipsLocation)
  const overlaping = checkShipOverlap(id, horizontal, computerShipsLocation)
  const validPosition = isValidPosition(id, horizontal, computerShipsLocation)
  if (!occupied && !overlaping && validPosition)
    placeShip(id, blocks, horizontal, false, computerShipsLocation)

  // recursive calling
  addComputerShips()
}

/**
 * checks if ship placement is possible
 * calls placeShip() function to place ship
 * @param {HTMLDivElement} block selected by the player
 */
function addPlayerShips(block) {
  const id = Number(block.target.id)
  const horizontal = isHorizontal()
  const occupied = shipInPlace(id, playerShipsLocation)
  const overlaping = checkShipOverlap(id, horizontal, playerShipsLocation)
  const validPosition = isValidPosition(id, horizontal, playerShipsLocation)
  if (!occupied && !overlaping && validPosition)
    placeShip(id, blocks, horizontal, true, playerShipsLocation)

  //  checks if all player ships are placed
  if (playerShipsLocation.length !== ships.length) nextShip()
  else {
    addComputerShips()
    closeDialog()
    initializeGamePlay()
  }
}

function queries() {
  blocks = document.querySelectorAll('dialog .block')
  blocks.forEach((block) => block.addEventListener('click', addPlayerShips))
  btnAxis = document.querySelector('dialog button')
  btnAxis.addEventListener('click', changeAxis)
}

export { queries, shipInPlace, checkShipOverlap, isValidPosition }
