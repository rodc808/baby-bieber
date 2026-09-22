console.clear();

const bieberBaby = [
  'Oh-ooh-whoa-oh-oh-oh-oh',
  'Oh-ooh-whoa-oh-oh-oh-oh',
  'Oh-ooh-whoa-oh, oh-oh-oh-oh',
  'You know you love me (yo), I know you care (uh-huh)',
  "Just shout whenever (yo), and I'll be there (uh-huh)",
  'You are my love (yo), you are my heart (uh-huh)',
  'And we will never, ever, ever be apart (yo, uh-huh)',
  "Are we an item? (yo) girl, quit playin' (uh-huh)",
  "We're just friends (yo), what are you sayin'? (uh-huh)",
  'Said, "There\'s another" (yo), and looked right in my eyes (uh-huh)',
  'My first love broke my heart for the first time, and I was like (yo, uh-huh)',
  'Baby, baby, baby, oh',
  'Like, "Baby, baby, baby, no"',
  'Like, "Baby, baby, baby, oh"',
  "I thought you'd always be mine, mine",
  'Baby, baby, baby, oh',
  'Like, "Baby, baby, baby, no"',
  'Like, "Baby, baby, baby, oh"',
  "I thought you'd always be mine, mine",
  "Oh, for you, I would've done whatever (uh-huh)",
  "And I just can't believe (yo) we ain't together (uh-huh)",
  "And I wanna play it cool (yo), but I'm losin' you (uh-huh)",
  "I'll buy you anything (yo), I'll buy you any ring (uh-huh)",
  "And I'm in pieces (yo), baby, fix me (uh-huh)",
  "And just shake me 'til you wake me from this bad dream (yo, uh-huh)",
  'I\'m goin\' down (oh), down, down, down (uh-huh)',
  "And I just can't believe, my first love won't be around, and I'm like",
  'Baby, baby, baby, oh',
  'Like, "Baby, baby, baby, no"',
  'Like, "Baby, baby, baby, oh"',
  "I thought you'd always be mine, mine",
  'Baby, baby, baby, oh',
  'Like, "Baby, baby, baby, no"',
  'Like, "Baby, baby, baby, oh"',
  "I thought you'd always be mine, mine (Luda!)",
  'When I was 13, I had my first love',
  'There was nobody that compared to my baby',
  'And nobody came between us, nor could ever come above',
  "She had me goin' crazy, oh, I was starstruck",
  "She woke me up daily, don't need no Starbucks (woo)",
  'She made my heart pound',
  'And skip a beat when I see her in the street and',
  'At school on the playground',
  'But I really wanna see her on the weekend',
  "She knows she got me dazin'",
  "Cause she was so amazin'",
  "And now, my heart is breakin'",
  "But I just keep on sayin'",
  'Baby, baby, baby, oh',
  'Like, "Baby, baby, baby, no"',
  'Like, "Baby, baby, baby, oh"',
  "I thought you'd always be MINE, mine",
  'Baby, baby, baby, oh',
  'Like, "Baby, baby, baby, no"',
  'Like, "Baby, baby, baby, oh"',
  "I thought you'd always be mine, mine",
  "I'm gone (yeah, yeah, yeah, yeah, yeah, yeah)",
  "Now, I'm all gone (yeah, yeah, yeah, yeah, yeah, yeah)",
  "Now, I'm all gone (yeah, yeah, yeah, yeah, yeah, yeah)",
  "Now, I'm all gone (gone, gone, gone)",
  "I'm gone",
];

const testLyrics1 = [
  "Moving through map like I got the cheat code (Code)",
  "Geass, one look, I'm in control (Trol)", 
  "C and V, I'm taking your soul", 
  "Give me some sugar and give me some more",
  "Miner in the store",
  "Minesweeper",
];

const testLyrics2 = [
  "Mine mine mine mine",
  "Trimmine, miner, minecraft, miniminerminter", 
  "C and V, I'm taking your soul", 
  "Give me some sugar and give me some more",
  "Miner in the store",
  "Minesweeper",
];

// KEY WORD: mine

/*
console.log(bieberBaby);
const babyString: string = bieberBaby.join(" ")
console.log(babyString);
*/

// strArr is the array of strings to look through
// case insensitive, use toLowercase
// Checks the entire array if it has "Mine" whether it's all capital or not or stuff
function hasMine(strArr: string[]): boolean{
  const babyString: string = strArr.join(" ").toLowerCase(); // turns the array of lyrics into a string 
  const newBabyArr: string[] = babyString // creates a new array of the words individually to check each
  .split(" ")
  .map((word) => word.replace(/[^a-z']/g, '')); // removes all non-alphabetical characters
  
  // console.log(newBabyArr); // test if the words are all individual
  
  return newBabyArr.includes("mine")
}

/* TEST CASES */
console.log(hasMine(bieberBaby)); // return true
console.log(hasMine(testLyrics1)); // returns false
console.log(hasMine(testLyrics2)); // returns true

// returns the amount of "Mine" inside of the array
function numMine(strArr: string[]): number{
  const babyString: string = strArr.join(" ").toLowerCase(); // turns the array of lyrics into a string 
  const newBabyArr: string[] = babyString // creates a new array of the words individually to check each
  .split(" ") // Divides every word in the string using " "
  .map((word) => word.replace(/[^a-z']/g, '')); // removes all non-alphabetical characters

 return newBabyArr.filter( // .filter to create a copy of the array with the new word 
  (word) => word === "mine") // the new word we want to find, in this case: mine
 .length; // returns the length of the array which only consists of "mine" at this point
} 

console.log(numMine(bieberBaby)); // return 12
console.log(numMine(testLyrics1)); // returns 0
console.log(numMine(testLyrics2)); // returns 4