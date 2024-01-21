const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

/*Search all users*/
router.get("/user/search", authMiddleware.verifyToken, userController.findAll);

/*Search user by user id */
router.get(
  "/user/:id",
  authMiddleware.verifyToken,
  userController.getUserByUserId
);

/*Update user */
router.patch("/user", authMiddleware.verifyToken, userController.updateUser);

/*Follow user */
router.patch(
  "/user/:id/follow",
  authMiddleware.verifyToken,
  userController.followUser
);

/*Unfollow user */
router.patch(
  "/user/:id/unfollow",
  authMiddleware.verifyToken,
  userController.unfollowUser
);

router.get(
  "/uv/suggestionsUser",
  authMiddleware.verifyToken,
  userController.suggestionsUser
);

module.exports = router;
