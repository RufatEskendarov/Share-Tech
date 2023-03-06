const seedComments = require("./comments-seeds.js");
const seedPost = require("./post-seeds.js");
const seedUser = require("./user-seeds.js");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedPost();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
