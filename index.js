function produceDrivingRange (blockRange) {
  return function (startingStreet, endingStreet) {
    let street1 = parseInt(startingStreet);
    let street2 = parseInt(endingStreet)
    if (street1 >= street2) {
      let blocks = street1 - street2;
      if (blocks <= blockRange) {
        return `within range by ${blockRange - blocks}`
      } else {
        return `${blocks - blockRange} blocks out of range`
      }
    } else {
      let blocks = street2 - street1;
      if (blocks <= blockRange) {
        return `within range by ${blockRange - blocks}`
      } else {
        return `${blocks - blockRange} blocks out of range`
      }
    }
  }
}

function produceTipCalculator (percentage) {
  return function (amount) {
    return amount * percentage;
  }
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor (name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
