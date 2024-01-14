const Notification = require("../models/notification.model");
const User = require("../models/user.model");

/* Create Notification */
exports.createNotification = async (req, res) => {
  const loggedInUser = await User.findById(req._id);
  try {
    let notificationObject = {
      recipient: req.body.recipient,
      url: req.body.url,
      text: req.body.text,
    };

    notificationObject.user = loggedInUser;

    const newNotification = await Notification.create(notificationObject);

    return res.status(200).send({
      notifications: newNotification,
    });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

/* Remove Notification */
exports.removeNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      msg: "Notification Deleted",
    });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

/* Get Notification */
exports.getNotification = async (req, res) => {
  try {
    const notifications = await Notification.find({
      recipient: req._id,
    });
    return res.status(200).send({
      notifications: notifications,
    });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

/* Update Read Status */
exports.updateReadStatus = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);

    if (!notification) {
      return res.status(400).send({
        msg: "No Notification found",
      });
    }

    const checkNotification = notification.recipient.filter((recipient) => {
      return recipient._id == req._id;
    });

    if (checkNotification.length == 0) {
      return res.status(200).send({
        msg: "User not in recipient field. Pls send the notification to recipient!",
      });
    }

    notification.isRead = true;

    await notification.save();
    return res.status(200).send({
      notifications: notification,
    });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

/* Delete All Notification */
exports.deleteAllNotifications = async (req, res) => {
  try {
    const result = await Notification.deleteMany({ recipient: req._id });
    return res.status(200).send({
      notifications: result,
      deletedCount: result.length,
    });
  } catch (err) {
    return res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};
