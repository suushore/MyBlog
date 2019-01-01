const chalk = require('chalk');
const moment = require('moment');

const log = (color, level) => (message) => {
  const prefix = `${moment().format()} [${level}] `;
  if (typeof message === 'object') {
    return console[level](chalk[color]('%o'), `${prefix}${message}`);
  }
  return console[level](chalk[color](`${prefix}${message}`));
};

module.exports = {
  debug : log('white', 'debug'),
  info : log('white', 'info'),
  warn : log('yellow', 'warn'),
  error : log('red', 'error'),
}
