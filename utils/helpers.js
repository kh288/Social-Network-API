const currentDate = new Date();

function convertHour() {
  if (currentDate.getHours() > 12) {
    return [currentDate.getHours() - 12, 'pm'];
  }
  return [currentDate.getHours(), 'am'];
}

// MM/DD/YYYY HH:MMam
const getTime = (
  (currentDate.getMonth() + 1) + '/' +
  currentDate.getDate() + '/' +
  currentDate.getFullYear() + ' ' +

  convertHour()[0] + ':' +
  currentDate.getMinutes() +
  convertHour()[1]
);

function getCurrentTime() {
  return getTime;
}

// console.log(getCurrentTime);

module.exports = { getCurrentTime };
