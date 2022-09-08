// STRING METHOD 1 - String length
let fact =
  'Did you know? Marie Curie remains the only person to earn Nobel prizes in two different sciences.';
let fact_length = fact.length;
console.log(fact);
console.log('The length of this random fact is: ', fact_length);
console.log(' ');

// STRING METHOD 2 - String slice()
let animals = 'Lion, Tiger, Panda, Wolf';
let slice_animals = animals.slice(13, 18);
console.log(animals);
console.log('My favourite animal is a', slice_animals);
console.log(' ');

// STRING METHOD 3 - Replacing string content
let statement = 'The sky is pink!';
let new_statement = statement.replace('pink', 'blue');
console.log(statement);
console.log('Whoops! I actually meant:', new_statement);
console.log(' ');

// STRING METHOD 4 - Coverting lower case to upper case
let text1 = 'This is the best day of my life!';
let text_upper = text1.toUpperCase();
console.log(text1);
console.log('I believe this is more appropriate:', text_upper);
console.log(' ');

let text2 = 'This iS a WeIrD tExT. i DO nOt LiKe iT';
let text_lower = text2.toLowerCase();
console.log(text2);
console.log("Still weird, but it's better than before:", text_lower);
console.log(' ');

// STRING METHOD 5 - String padding with padStart() and padEnd()
let letter = 'n';
let start_padded = letter.padStart(7, 'O');
console.log(start_padded);

let end_padded = letter.padEnd(7, 'O');
console.log(end_padded);

let num = 8;
// Padding does not apply to int, therefore it needs to be converted to a string!
let text3 = num.toString();
let numStart_padded = text3.padStart(5, '0');
console.log(numStart_padded);

let numEnd_padded = text3.padEnd(5, '0');
console.log(numEnd_padded);
