const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // code goes here
  return tutorials.map( function (title) {
    // Hey remember when you had to do this the long way around in your project because some foolish reason? Yeah.
  title = title.split(' ');
  for (let i = 0; i < title.length; i++) {
    // remember, this is each WORD in the title, not each letter, because it's split at the space
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    // google for simple tasks that probably hundreds or thousands of people have had to code before you is your friend
  }
  return title.join(' ');
  });
}

/* 
OKAY EVIDENTLY PUTTING THIS AS A WHOLE SEPARATE THING DIDN'T WORK for some reason
const capTutorials = (title) => {
  // Hey remember when you had to do this the long way around in your project because some foolish reason? Yeah.
  title.split(' ');
  for (i = 0; i < title.length; i++) {
    // remember, this is each WORD in the title, not each letter, because it's split at the space
    title[i].toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    // google for simple tasks that probably hundreds or thousands of people have had to code before you is your friend
  }
  return title.join(' '); 
} */


/* let medicis = ["Lorenzo", "Cosimo", "Giuliano"]
let title = medicis.map( arg => arg + "di Medici")

returns ["Lorenzo di Medici", "Cosimo di Medici", "Giuliano di Medici"]

the long way around is medicis.map( function(argument) {
  a more complex function goes here
})
*/