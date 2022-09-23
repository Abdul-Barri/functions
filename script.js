"use strict";

////////////////////////////////////////

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 150 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123", 5);
console.log(bookings);

////////////////////////////////////////

const flight = "LH234";
const barraghan = {
  name: "Abdul Barri Lawal",
  passport: 2348174509694,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2348174509694) {
    alert("Check In");
  } else {
    alert("Wrong Passport");
  }
  console.log(flightNum);
};

// checkIn(flight, barraghan);
// console.log(flight);

const newPassport = function (personObj) {
  personObj.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(barraghan);
checkIn(flight, barraghan)
console.log(barraghan);