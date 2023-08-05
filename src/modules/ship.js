const ship = (name, length) => ({ name, length })

const carrier = ship('Carrier', 5)
const battleship = ship('Battleship', 4)
const cruiser = ship('Cruiser', 3)
const submarine = ship('Submarine', 3)
const destroyer = ship('Destroyer', 2)

const playerShipsLocation = []
const computerShipsLocation = []
const ships = [carrier, battleship, cruiser, submarine, destroyer]

/**
 * place ship on board & stores it's location
 * @param {number} selected location to place ship
 * @param {NodeList} blocks
 * @param {boolean} horizontal direction to place ship
 * @param {boolean} player determine player or computer
 * @param {Array} location to store ships
 */
function placeShip(selected, blocks, horizontal, player, location) {
  const shipLength = ships[location.length].length
  const shipBlocks = []
  let nextBlock
  for (let i = 0; i < shipLength; i += 1) {
    if (horizontal) nextBlock = blocks[selected + i]
    else nextBlock = blocks[selected + i * 10]
    if (player) nextBlock.style.backgroundColor = '#756b80'
    shipBlocks.push(Number(nextBlock.id))
  }
  location.push(shipBlocks)
}

export { ships, placeShip, playerShipsLocation, computerShipsLocation }
