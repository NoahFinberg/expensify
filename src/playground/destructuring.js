// OBJECT DESTRUCTURING

// const person = {
//   name: "Noah",
//   age: 28,
//   location: {
//     city: "Boston",
//     temp: 75,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${firstName} is ${age}.`);
// console.log(`it's ${temperature} in ${city}.`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self Published" } = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ["1299 Main Street", "Boston", "Massachusettes", "02210"];
const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}.`);
