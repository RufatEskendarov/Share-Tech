const { User } = require("../models");

const userData = [
  {
    login: "Paul55",
    email: "paul55@gmail.com",
    password: "password12345",
  },
  {
    login: "Rick25",
    email: "rick25@gmail.com",
    password: "password12345",
  },
  {
    login: "X-Dev",
    email: "x-dev@gmail.com",
    password: "password12345",
  },
  {
    login: "AmonRa",
    email: "amonra@gmail.com",
    password: "password12345",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
