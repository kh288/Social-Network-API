const usernames = [
'Ronzerwa',
'BookJean',
'Twitternage',
'Plugbital',
'Booklith',
'ChooseYes',
'Bufferix',
'Mystor',
'UnowBobo',
'SimplyMc',
'Skatech',
'EatInstant',
'HopeNotice',
'Atergibb',
'Clarette',
'Dyhoodno',
'Chiriya',
'Lummotm',
'Munewman',
'FallsFan',
'Camopaq',
'Novasse',
'Paradorld',
'Broadcastar',
'FireNeat',
'ManiakChick',
'LastingTman',
'Shadefi',
'RelaxZest',
'FreeMax',
'Darity',
'Gametros',
'ThereActually',
'MidnightCyber',
'Softpany',
'Attabra'
];

const emails = [
'gmail',
'yahoo',
'hotmail',
'aol',
'msn',
'live',
'outlook',
'icloud'
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

// console.log(generateUser());

module.exports = { generateUser };