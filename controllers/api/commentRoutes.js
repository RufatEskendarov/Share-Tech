const router = require("express").Router();
const { Comments, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comments.findAll({
      where: { post_id },
      include: [User],
    });
    // serialize the data
    const comment = commentData.map((comment) => comment.get({ plain: true }));

    res.status(200).json(commentData);

    res.render("aimed-post", { comment, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Method to POST new comment for one particular post
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = {
      post_id: parseInt(req.body.post_id),
      content: req.body.content,
      user_id: req.session.user_id,
    };

    const newCommentData = await Comments.create(commentData);
    console.log(newCommentData);

    if (newCommentData) {
      res.json(newCommentData);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
