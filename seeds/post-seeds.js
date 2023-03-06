const { Post } = require("../models");

const postData = [
  {
    title: "MVC approach",
    user_id: 1,
    content:
      "Model-view-controller (MVC) is a software architectural pattern[1] commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.",
    commented_on: "02/06/2023",
  },
  {
    title: "Node JS",
    user_id: 2,
    content:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
    commented_on: "02/06/2023",
  },
  {
    title: "NPM",
    user_id: 3,
    content:
      "NPM is a package manager for Node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use.The NPM program is installed on your computer when you install Node.js",
    commented_on: "02/06/2023",
  },
  {
    title: "Semantic HTML",
    user_id: 4,
    content:
      "Semantic means 'relating to meaning'. Writing semantic HTML means using HTML elements to structure your content based on each element's meaning, not its appearance.",
    commented_on: "02/06/2023",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
