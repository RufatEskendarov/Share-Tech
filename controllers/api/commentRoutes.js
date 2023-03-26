const router = require("express").Router();
const { Comments, User } = require("../../models/Comments");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comments.findAll({
      where: { post_id },
      include: [User],
    });
    // serialize the data
    const comment = commentData.map((comment) => comment.get({ plain: true }));

    // console.log(commentData);
    res.status(200).json(commentData);

    res.render("aimed-post", { comment, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const commentBody = req.body;
    const newCommentData = await Comments.create({
      ...commentBody,
      user_id: req.session.user_id,
    });

    if (newCommentData) {
      console.log(newCommentData);
      res.json(newCommentData);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
