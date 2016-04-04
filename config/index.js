var env = process.env.NODE_ENV || 'default',
  cfg = require('./config.' + env);

module.exports = cfg;