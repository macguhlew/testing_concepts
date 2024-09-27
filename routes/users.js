// routes/users.js
const router = require('express').Router();
const userController = require('../db/controllers/user-controller');

router.route('/users')
    .post(userController.createUser)
    .get(userController.get);

router.route('/users/:userId')
    .get(userController.getUser)
    .put(userController.editUser)
    .delete(userController.deleteUser);

module.exports = router;
