const uuidv4 = require('uuid/v4');

/**
 * a basic class for generating adoption tickets
 */
class Ticket {
  constructor(username, email, id = uuidv4()) {
    this.username = username;
    this.email = email;
    this.id = id;
  }
}

module.exports = Ticket;