const connection = require("../config/db");

module.exports = {
  checkUsername: (username) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM users WHERE username='${username}'`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};
