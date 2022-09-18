"use strict";

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
