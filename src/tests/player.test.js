import {
  shipInPlace,
  checkShipOverlap,
  isValidPosition,
} from '../modules/player'

test('check if there is a ship at selected location', () => {
  const shipLocations = [
    [0, 1, 2, 3],
    [20, 30, 40],
  ]
  expect(shipInPlace(20, shipLocations)).toBeTruthy()
  expect(shipInPlace(10, shipLocations)).not.toBeTruthy()
})

test('check if ships are overlapping', () => {
  const shipLocations = [
    [12, 13, 14, 15, 16],
    [20, 30, 40, 50],
  ]
  expect(checkShipOverlap(11, true, shipLocations)).toBeTruthy()
  expect(checkShipOverlap(22, false, shipLocations)).not.toBeTruthy()
})

test('check if there is enough space to place ships', () => {
  const shipLocations = [[12, 13, 14, 15, 16]]

  expect(isValidPosition(16, true, shipLocations)).toBeTruthy()
  expect(isValidPosition(72, false, shipLocations)).not.toBeTruthy()
})
