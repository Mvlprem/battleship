import { checkHits, checkWinner } from '../modules/gameplay'

test('check if it is a hit or miss', () => {
  const div = document.createElement('div')
  const nodeList = [div, div, div, div, div, div, div, div, div, div]

  const shipLocations = [
    [0, 1, 2, 3, 4],
    [22, 32, 42, 52],
  ]
  expect(checkHits(0, [], [], nodeList, shipLocations)).toBeTruthy()
  expect(checkHits(6, [], [], nodeList, shipLocations)).not.toBeTruthy()
})

test('check for a possible winner', () => {
  const shipLocations = [
    [0, 1, 2, 3, 4],
    [22, 32, 42, 52],
  ]
  const arrayOne = [22, 32, 42, 52, 0, 1, 2, 3, 4]
  const arrayTwo = [22, 32, 42, 3, 4, 0, 2, 1]

  expect(checkWinner(shipLocations, arrayOne)).toBeTruthy()
  expect(checkWinner(shipLocations, arrayTwo)).not.toBeTruthy()
})
