const db = require("../models/database");

const userController = {};

let userTaken = false;
let username;
let password;
userController.newUser = (req, res) => {
  db
    .query(`SELECT * FROM users WHERE username = '${req.body.username}'`)
    .then(data2 => (userTaken = data2.rows.length > 0))
    .then(() => {
      if (!userTaken) {
        db
          .query("INSERT INTO users (username, password) VALUES ($1, $2)", [
            req.body.username,
            req.body.password
          ])
          .then(() => console.log("new user created"))
          .catch(err => console.error(err.stack));
      } else console.log("Username taken.");
    });
};

userController.verifyUser = (req, res) => {
  db
    .query(`SELECT * FROM users WHERE username = '${req.body.username}'`)
    .then(data2 => {
      if (data2.rows[0].password === req.body.password) {
      }
    });
};

module.exports = userController;
