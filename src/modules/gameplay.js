import { playerShipsLocation, computerShipsLocation } from './ship'
import gameOverDialog from './endGameDialog'

let playerBlocks
const playerHits = []
const playerMisses = []

let computerBlocks
const computerHits = []
const computerMisses = []

const HIT = 'rgba(255, 166, 116, 255)'
const MISS = 'rgba(158, 252, 198, 255)'

/**
 * display dialog with game results
 * @param {string} message win or loose
 */
function gameOver(message) {
  gameOverDialog(message).showModal()
  const btn = document.body.querySelector('.play-again')
  btn.addEventListener('click', () => {
    window.location.reload()
  })
}

/**
 * check for a possible winner
 * @param {Array} shipLocations
 * @param {Array} hits
 * @returns {boolean}
 */
function checkWinner(shipLocations, hits) {
  const locations = shipLocations.flat()
  return locations.every((num) => hits.includes(num))
}

/**
 * check weather it's a hit or miss and update accordingly
 * @param {number} target to hit
 * @param {Array} hit to store hits
 * @param {Array} miss to store misses
 * @param {NodeList} board
 * @param {Array} shipLocation to check hit or miss
 * @returns {boolean}
 */
function checkHits(target, hit, miss, board, shipLocation) {
  const validate = shipLocation.some((array) => array.includes(target))
  const block = board[target]
  if (validate) {
    block.style.backgroundColor = HIT
    block.textContent = 'X'
    hit.push(target)
  } else {
    block.style.backgroundColor = MISS
    miss.push(target)
  }
  return validate
}

/**
 * send computer generated target to checkHits()
 * & calls checkWinner() to check for a win
 */
function computer() {
  const target = Math.floor(Math.random() * 100)
  const inHit = computerHits.includes(target)
  const inMiss = computerMisses.includes(target)
  if (!inHit && !inMiss) {
    checkHits(
      target,
      computerHits,
      computerMisses,
      playerBlocks,
      playerShipsLocation
    )
    if (checkWinner(playerShipsLocation, computerHits)) gameOver('You Loose')
  } else computer() // recursive calling
}

/**
 * send player selected target to checkHits()
 * & calls checkWinner() to check for a win
 * @param {Element} block
 */
function player(block) {
  const target = Number(block.target.id)
  checkHits(
    target,
    playerHits,
    playerMisses,
    computerBlocks,
    computerShipsLocation
  )
  if (checkWinner(computerShipsLocation, playerHits)) gameOver('You Won')
  else computer()
}

// initialize's DOM queries
function initializeGamePlay() {
  playerBlocks = document.querySelectorAll('.player-board > div')
  computerBlocks = document.querySelectorAll('.computer-board > div')
  computerBlocks.forEach((block) =>
    block.addEventListener('click', player, { once: true })
  )
}

export { initializeGamePlay, checkHits, checkWinner }
