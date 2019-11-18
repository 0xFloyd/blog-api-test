// this file imports all other routes

var session = require('./session');
var user = require('./user');
var message = require('./message');

module.exports = session, user, message;

