const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

/*Search all users*/
router.get("/search", authMiddleware.verifyToken, userController.findAll);
/*Search user by user id */
router.get("/:id", authMiddleware.verifyToken, userController.getUserByUserId);
// router.patch("/user", authMiddleware.verifyToken, userController.updateUser);
// router.patch(
//   "/user/:id/follow",
//   authMiddleware.verifyToken,
//   userController.followUser
// );
// router.patch(
//   "/user/:id/unfollow",
//   authMiddleware.verifyToken,
//   userController.unfollowUser
// );
// router.get(
//   "/suggestionsUser",
//   authMiddleware.verifyToken,
//   userController.suggestionsUser
// );

module.exports = router;

// const userController = require("../controllers/user.controller");
// const authMiddleware = require("../middlewares/auth.middleware");

// module.exports = function (app) {
//   app.get("/search", authMiddleware.verifyToken, userController.findAll);
//   app.get(
//     "/user/:id",
//     authMiddleware.verifyToken,
//     userController.getUserByUserId
//   );
//   app.patch("/user", authMiddleware.verifyToken, userController.updateUser);
//   app.patch(
//     "/user/:id/follow",
//     authMiddleware.verifyToken,
//     userController.followUser
//   );
//   app.patch(
//     "/user/:id/unfollow",
//     authMiddleware.verifyToken,
//     userController.unfollowUser
//   );
//   app.get(
//     "/suggestionsUser",
//     authMiddleware.verifyToken,
//     userController.suggestionsUser
//   );
// };
