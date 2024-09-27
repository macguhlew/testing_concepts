const userController ={};
const {User} = require('../../db/sequelize');

userController.createUser = (req, res, next) => {
    User.create(req.body).then( u =>res.json(u))
        .catch(next);
};

userController.get = (req, res, next) => {
    User.findAll().then(users => {
        res.json(users)
    }).catch(next);
};

userController.getUser = async (req, res, next) => {
    const id = req.params.userId;
    //console.log("userId: ", req.params.userId);
    const user = await User.findByPk(id).catch(next);
    //console.log("user: ", user);
    if(user){
        res.json(user)
    } else {
        res.status(404).send('User with id ${id} not found.');
    }
};

userController.getUsers = (req, res, next) => {
    const id = req.params.userId;
    findOne(id).then(users => {
        if(users){
            res.json(users)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

userController.editUser = (req, res, next) => {
    const newUser = req.body;
    const id = req.params.userId;
    User.findByPk(id).then(async (user) => {
        if (user) {
            await User.update(newUser, {where: {id}});
            Object.assign(user, newUser);
            res.status(200).send()
        }else {
            res.status(404).send();
        }
    }).catch(next);
};

userController.deleteUser = (req, res, next) => {
    const id = req.params.userId;
    findOne(id).then(user => {
        if (user) {
            user.destroy().then(res.status(200).send()).catch(next);
        }else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = userController;