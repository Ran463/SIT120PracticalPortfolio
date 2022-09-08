// Creating arrays of numbers
const numArray = [71, 9, 10, 88, 27, 2, 53, 97, 63, 4];
console.log('This is the orginal number array: ', '\n', numArray);

// Creating arrays of strings
const animalArray = ['Dog', 'Cat', 'Mouse', 'Pig', 'Elephant'];
const nameArray = ['Danny', 'Caroline', 'Mowgli', 'Poppy', 'Eric'];

console.log(
  'These are the Original Arrays:',
  '\n',
  animalArray,
  '\n',
  nameArray,
  '\n'
);

// METHOD 1 - Using string arrays - sort() and reverse()
let sorted_animalArray = animalArray.sort();
let sorted_nameArray = nameArray.sort();
console.log(
  'These are the sorted arrays:',
  '\n',
  sorted_animalArray,
  '\n',
  sorted_nameArray,
  '\n'
);

let reversed_animalArray = animalArray.reverse();
let reversed_nameArray = nameArray.reverse();
console.log(
  'These are the reversed arrays:',
  '\n',
  reversed_animalArray,
  '\n',
  reversed_nameArray,
  '\n'
);

// METHOD 1 - Using number arrays - sort() and reverse()
let sorted_numArray = numArray.sort(function (a, b) {
  return a - b;
});
console.log('This is the sorted number array:', '\n', sorted_numArray, '\n');

let reversed_numArray = numArray.sort(function (a, b) {
  return b - a;
});
console.log('This is the sorted number array:', '\n', reversed_numArray, '\n');

// METHOD 2 - Using number arrays - filter()
let filter_numArray = numArray.filter(isAdult);
function isAdult(age) {
  return age >= 18;
}
console.log('This is the filtered number array:', '\n', filter_numArray, '\n');

// METHOD 3 - Using number arrays - concat() and sort()
let combinedStringArray = animalArray.concat(nameArray);
console.log(
  'This is the concatinated array of the two string arrays:',
  '\n',
  combinedStringArray,
  '\n'
);

let sorted_combinedStringArray = combinedStringArray.sort();
console.log(
  'This is the sorted concatinated array of the two string arrays:',
  '\n',
  sorted_combinedStringArray,
  '\n'
);

// METHOD 4 - Using number and string array - join() and concat()
let join_numArray = numArray.join(' and ');
console.log(
  "This is the number array joined together using 'and':",
  '\n',
  join_numArray,
  '\n'
);

let join_combinedStringArray = combinedStringArray.join();
console.log(
  'This is the combined string array joined together:',
  '\n',
  join_combinedStringArray,
  '\n'
);

let allJoinArray = join_combinedStringArray.concat(join_numArray);
console.log(
  'This is the combined string array and number array joined together:',
  '\n',
  allJoinArray,
  '\n'
);

// METHOD 5 - Using number and string array - slice()
let slice_allJoinArray = allJoinArray.slice(59, 121);
console.log(
  'This is the sliced array to include just the number array:',
  '\n',
  slice_allJoinArray,
  '\n'
);
