const router = require("express").Router();
const { Post, User, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

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

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        User,

        {
          model: Comments,
          include: [User],
          //attributes: ["login"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
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
    // what should we pass here? we need to get some data passed via the request body (something.something.id?)
    // change the model below, but not the findByPk method. - DONE!
    const postData = await Post.findOne({
      // helping you out with the include here, no changes necessary
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
      // serialize the data
      const post = postData.get({ plain: true });
      // which view should we render for a single-post? - DONE!
      console.log(post);
      res.status(200).json(post);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/post/:id", async (req, res) => {
//   try {
//     // what should we pass here? we need to get some data passed via the request body (something.something.id?)
//     // change the model below, but not the findByPk method. - DONE!
//     const postData = await Post.findOne({
//       // helping you out with the include here, no changes necessary
//       where: { id: req.params.id },
//     });

//     if (postData) {
//       // serialize the data
//       const post = postData.get({ plain: true });
//       // which view should we render for a single-post? - DONE!
//       console.log(post);
//       res.status(200).json(post);
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;
