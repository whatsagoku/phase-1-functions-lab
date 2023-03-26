let distanceInBlocks = 8
let numberOfBlocks = 50>= 1 || 8
let blocks = 264



function distanceFromHqInBlocks(blocks){
    if (blocks <42) {
        return 42 - blocks
    } else {
        return blocks - 42;
    }
}
console.log(distanceFromHqInBlocks)

function distanceFromHqInFeet(blocks) {
    const blockDistance = distanceFromHqInBlocks(blocks);
    return blockDistance * 264;
}
console.log(distanceFromHqInFeet)

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return distance * 264;
}

console.log(distanceTravelledInFeet)

function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
  
    
    if (feetTraveled <= 400) {
      return 0;
    }
    
    else if (feetTraveled > 400 && feetTraveled <= 2000) {
      const distanceOver400 = feetTraveled - 400;
      const fare = distanceOver400 * 0.02;
      
      return Math.round(fare * 100) / 100;
    }
    
    else if (feetTraveled > 2000 && feetTraveled <= 2500) {
      return 25;
    }
    
    else {
      return "cannot travel that far";
    }
  }