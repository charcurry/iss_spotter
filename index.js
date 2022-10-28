// index.js
const {  nextISSTimesForMyLocation } = require("./iss");


//prints the times the iss will pass over my location with formatting to give it in a date and time format
const printPasstimes = function(passTimes) {
  for (let passTime of passTimes) {
    const dateTime = new Date(0)
    dateTime.setUTCSeconds(passTime.risetime)
    const duration = passTime.duration
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`)
  }
};

//test function for nextISSTimesForMyLocation with the callback giving it the intended outcome
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPasstimes(passTimes)
})