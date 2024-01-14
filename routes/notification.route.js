const notificationController = require("../controllers/notification.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const express = require("express");
const router = express.Router();

router.post(
  "/notification",
  authMiddleware.verifyToken,
  notificationController.createNotification
);
router.delete(
  "/notification/:id",
  authMiddleware.verifyToken,
  notificationController.removeNotification
);
router.get(
  "/notifications",
  authMiddleware.verifyToken,
  notificationController.getNotification
);
router.patch(
  "/isReadNotification/:id",
  authMiddleware.verifyToken,
  notificationController.updateReadStatus
);
router.delete(
  "/deleteAllNotification",
  authMiddleware.verifyToken,
  notificationController.deleteAllNotifications
);

module.exports = router;
