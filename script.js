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
};

newPassport(barraghan);
// checkIn(flight, barraghan);
console.log(barraghan);

///////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer("JavaScript is the best!", oneWord);
transformer("JavaScript is the best!", upperFirstWord);

////////////////////////////////////////////

const myName = "Abdul Barri";
const friendName = "Owologe";
const thirdPersonName = "Habeeb";

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");

const greeterHello = greet("Hello");

const greeterAssalam = greet("Assalam Alaikum");

greeterHey(myName);
greeterAssalam(myName);
greeterHello(friendName);
// OR
greet("Hey")(myName);
greet("Assalam Alaikum")(myName);
greet("Hello")(friendName);
