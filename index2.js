const { nextISSTimesForMyLocation } = require("./iss_promised.js")

const printPassTimes = function(passTimes) {
    for (let passTime of passTimes) {
      const dateTime = new Date(0)
      dateTime.setUTCSeconds(passTime.risetime)
      const duration = passTime.duration
      console.log(`Next pass at ${dateTime} for ${duration} seconds!`)
    }
  };


  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });