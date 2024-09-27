const folderController ={};
const {Folder} = require('../../db/sequelize');

folderController.createFolder = (req, res, next) => {
    Folder.create(req.body).then( u =>res.json(u))
        .catch(next);
};

folderController.get = (req, res, next) => {
    Folder.findAll().then(folders => {
        res.json(folders)
    }).catch(next);
};

folderController.getFolder = async (req, res, next) => {
    const id = req.params.folderId;
    console.log("folderId: ", req.params.folderId);
    const folder = await Folder.findByPk(id).catch(next);
    console.log("folder: ", folder);
    if(folder){
        res.json(folder)
    } else {
        res.status(404).send('Folder with id ${id} not found.');
    }
};

folderController.getFolders = (req, res, next) => {
    Folder.findAll().then(folders => {
        if(folders){
            res.json(folders)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

folderController.editFolder = (req, res, next) => {
    const newFolder = req.body;
    const id = req.params.folderId;
    Folder.findByPk(id).then(async (folder) => {
        if (folder) {
            await Folder.update(newFolder, {where: {id}});
            Object.assign(folder, newFolder);
            res.status(200).send()
        }else {
            res.status(404).send();
        }
    }).catch(next);
};

folderController.deleteFolder = (req, res, next) => {
    const id = req.params.folderId;
    findOne(id).then(folder => {
        if (folder) {
            folder.destroy().then(res.status(200).send()).catch(next);
        }else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = folderController;