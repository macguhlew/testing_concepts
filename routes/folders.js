// routes/users.js
const router = require('express').Router();
const folderController = require('../db/controllers/folder-controller');

router.route('/folders')
    .post(folderController.createFolder)
    .get(folderController.get);

router.route('/folders/:folderId')
    .get(folderController.getFolder)
    .put(folderController.editFolder)
    .delete(folderController.deleteFolder);

module.exports = router;
