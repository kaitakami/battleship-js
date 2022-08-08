// location are coordinates, each coordinate is an array with two number values. ex) [2, 4], [x, y]
// so location are coordinateS, ex) [[2,4], [3,4], [4,4]]
const ship = (length, damage, sunk, location) => {
  let length = length
  let damage = damage
  let sunk = sunk
  let location = location
  function hit() {
    length = length - 1
  }
  function isSunk() {
    if (length === 0) {
      sunk = true
    }
  }
    return {
    length, // this is a number
    damage, // this would change every time the player makes a move
    sunk, // true or false
    location, // array with coordinates of the ship. ex) in case the length is 3 location arr should have 3 values
    hit,
    isSunk,
  }
}

const ship1 = ship(3, null, false, [[2,3]])
console.log(ship1)


const gameBoard = () => {
  return {
    placeShip: (length, location) => {
      ship(length, 0, false, location)
    },
    missedAttacks: [], // array with coordinates
    receiveAttack: (coordinates) => {
      //  determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot
    }
  }
}

const player = () => {
  return {
    playTurn: () => {

    }
  }
}

const computerPlayer = () => {
  // should do a random attack randomAttack()
}