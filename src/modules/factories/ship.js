const ship = (length, damage, sunk, location) => {
  function isSunk() {
    if (length === 0) sunk = true
    console.log(sunk)
  }
  function hit() {
    length = length - 1
    console.log(length)
  }
  return {
    length, // this is a number
    damage, // this would change every time the player makes a move // where they've been hit
    sunk, // true or false
    location, // array with coordinates of the ship. ex) in case the length is 3 location arr should have 3 values
    hit,
    isSunk   
  }
}

const ship1 = ship(3, null, false, [[2,3], [3,3], [4,3]])

console.log(ship1)