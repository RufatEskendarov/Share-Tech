const router = require("express").Router();
const { Post, User, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

//Create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newPost.get({ plain: true }));

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update post
router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log("here is the req.body", req.body);
    const [affectedData] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedData > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        User,

        {
          model: Comments,
          include: [User],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).json({
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.params.id);

    const postData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      console.log(post);
      res.status(200).json(post);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
