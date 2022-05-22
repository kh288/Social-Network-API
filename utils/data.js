// List of random usernames
const usernames = [
"Ronzerwa",
"BookJean",
"Twitternage",
"Plugbital",
"Booklith",
"ChooseYes",
"Bufferix",
"Mystor",
"UnowBobo",
"SimplyMc",
"Skatech",
"EatInstant",
"HopeNotice",
"Atergibb",
"Clarette",
"Dyhoodno",
"Chiriya",
"Lummotm",
"Munewman",
"FallsFan",
"Camopaq",
"Novasse",
"Paradorld",
"Broadcastar",
"FireNeat",
"ManiakChick",
"LastingTman",
"Shadefi",
"RelaxZest",
"FreeMax",
"Darity",
"Gametros",
"ThereActually",
"MidnightCyber",
"Softpany",
"Attabra"
];
// List of random email suffixes
const emails = [
"gmail",
"yahoo",
"hotmail",
"aol",
"msn",
"live",
"outlook",
"icloud"
];
// List of random thoughts
const thoughts = [
"Poke Fun At",
"There's No I in Team",
"Don't Look a Gift Horse In The Mouth",
"Par For the Course",
"Put a Sock In It",
"Swinging For the Fences",
"Dropping Like Flies",
"On Cloud Nine",
"Raining Cats and Dogs",
"Every Cloud Has a Silver Lining",
"Everything But The Kitchen Sink",
"My Cup of Tea",
"Go Out On a Limb",
"Heads Up",
"A Lot on One's Plate",
"Beating Around the Bush",
"Scot-free",
"Right Out of the Gate",
"A Little from Column A, a Little from Column B",
"A Day Late and a Dollar Short",
];

// Generates an email based on their username
function genEmailFromUsername(username) {
  const emailPrefix = username.toLowerCase();
  const emailSuffix = emails[Math.floor(Math.random() * emails.length)];
  return `${emailPrefix}@${emailSuffix}.com`;
}

// Generates a user that randomly returns an array username + email
function generateUser() {
  const user = [usernames[Math.floor(Math.random() * usernames.length)]];
  user.push(genEmailFromUsername(user[0]));
  return user;
}

function generateThought() {
  return thoughts[Math.floor(Math.random() * thoughts.length)];
}

console.log(generateUser());
console.log(generateThought());

module.exports = { generateUser, generateThought };