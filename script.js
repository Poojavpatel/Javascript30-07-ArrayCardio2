/*jshint esversion: 6 */
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// .some checks if atleast one element in your array is what u are looking for
// is atleast one person 19

// const adult = people.some( function(person) {
//     const currentyear = (new Date()).getFullYear();
//     if (currentyear -  person.year >= 19) {
//         return true;
//     }
// });
const adult = people.some((person) => {
    const currentyear = (new Date()).getFullYear();
    return (currentyear -  person.year >= 19);
});
console.log(adult);
console.log({adult});

// every checks if all elements are what u are looking for
// is everyone 19
const alladult = people.every( (person) => {
    
});
