'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING
  }
});

export default User;

// username: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: {
  //     name: 'username',
  //     msg: 'A username with that email already exists'
  //   }
  // },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: {
  //     name: 'users_email',
  //     msg: 'A user with this email already exists'
  //   },
  //   validate: {
  //     notEmpty: true,
  //     isEmail: true
  //   }
  // }