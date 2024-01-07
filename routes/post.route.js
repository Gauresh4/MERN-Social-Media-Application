const express = require("express");
const postController = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

/*Create posts*/
router.post("/posts", authMiddleware.verifyToken, postController.createPosts);

/*Get posts*/
router.get("/posts", authMiddleware.verifyToken, postController.getPosts);

/*Update a particular post */
router.patch(
  "/post/:id",
  authMiddleware.verifyToken,
  postController.updatePost
);

/*Get a particular post*/
router.get(
  "/post/:id",
  authMiddleware.verifyToken,
  postController.getParticularPost
);

/*Delete a particular post*/
router.delete(
  "/post/:id",
  authMiddleware.verifyToken,
  postController.deletePost
);

/* Like Post*/
router.patch(
  "/post/:id/like",
  authMiddleware.verifyToken,
  postController.likePost
);

/* Unlike Post*/
router.patch(
  "/post/:id/unlike",
  authMiddleware.verifyToken,
  postController.unlikePost
);

/* Get User's Post */
router.get(
  "/user_posts/:id",
  authMiddleware.verifyToken,
  postController.getUserPost
);

/* Save a particular post */
router.patch(
  "/savePost/:id",
  authMiddleware.verifyToken,
  postController.savePost
);

/* Un Save Post */
router.patch(
  "/unSavePost/:id",
  authMiddleware.verifyToken,
  postController.unSavePost
);
router.get(
  "/getSavePosts",
  authMiddleware.verifyToken,
  postController.getAllSavedPosts
);
module.exports = router;
