if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const { Sequelize } = require('sequelize');
const logger = require('debug')('SERVER:sequelize');
const UserModel = require('../models/user');
const FolderModel = require('../models/folder');

/**
 * DB connection setup
 */
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: msg => logger(msg)
});

const User = UserModel(sequelize, Sequelize);
const Folder = FolderModel(sequelize, Sequelize);

/**
 * Uncomment this in order to generate table
 */
sequelize.sync().then(logger('DB is synced'));

module.exports = {User, Folder};