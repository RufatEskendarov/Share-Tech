const { Comments } = require("../models");

const commentsData = [
  {
    post_id: 1,
    user_id: 2,
    content: "Great job!",
    commented_on: "02/06/2023",
  },
  {
    post_id: 2,
    user_id: 1,
    content: "Well done!",
    commented_on: "02/06/2023",
  },
  {
    post_id: 1,
    user_id: 3,
    content: "Well done!",
    commented_on: "02/06/2023",
  },
  {
    post_id: 2,
    user_id: 4,
    content: "I need more information on this topic :(",
    commented_on: "02/06/2023",
  },
  {
    post_id: 3,
    user_id: 2,
    content: "I like it!",
    commented_on: "02/06/2023",
  },
  {
    post_id: 3,
    user_id: 1,
    content: "I like it!",
    commented_on: "02/06/2023",
  },
  {
    post_id: 4,
    user_id: 1,
    content: "I need more information on this topic :(",
    commented_on: "02/06/2023",
  },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
