// index.js
const { fetchMyIP, fetchCoordsByIp } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIp('174.7.173.125', (error, coordinates) => {
  if (error) {
         console.log("It didn't work!" , error);
         return;
       }
  // output.latitude = data.latitude
  // output.longitude = data.longitude
  console.log('It worked! Returned coordinates:', coordinates)
})


//'174.7.173.125'
//{ latitude: 49.2827291, longitude: -123.1207375 }